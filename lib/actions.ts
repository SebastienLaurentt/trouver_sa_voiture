"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";

import {

  estimationSchemaWithId,
  estimationSchemaWithoutId,
  vehicleSchemaWithId,
  vehicleSchemaWithoutId,
} from "./schema";
import { createClient } from "./server";
import { supabase } from "./supabase";

export const getAllVehiclesList = async () => {
  try {
    const vehicles = await prisma.vehicule.findMany();

    const validatedVehicles = vehicles.map((vehicle) =>
      vehicleSchemaWithId.parse(vehicle)
    );

    return validatedVehicles;
  } catch (error) {
    throw new Error("Failed to fetch vehicles data");
  }
};

export const getPremiumVehicles = async () => {
  try {
    const premiumVehicles = await prisma.vehicule.findMany({
      where: { premium: true },
    });

    const validatedVehicles = premiumVehicles.map((vehicle) =>
      vehicleSchemaWithId.parse(vehicle)
    );

    return validatedVehicles;
  } catch (error) {
    throw new Error("Failed to fetch premium vehicles data");
  }
};

export const getNonPremiumVehicles = async () => {
  try {
    const nonPremiumVehicles = await prisma.vehicule.findMany({
      where: { premium: false },
    });

    const validatedVehicles = nonPremiumVehicles.map((vehicle) =>
      vehicleSchemaWithId.parse(vehicle)
    );

    return validatedVehicles;
  } catch (error) {
    throw new Error("Failed to fetch non-premium vehicles data");
  }
};

export const getVehicleById = async (id: string) => {
  try {
    const vehicle = await prisma.vehicule.findUnique({
      where: { id },
    });

    if (!vehicle) {
      throw new Error("Véhicule non trouvé");
    }

    const validatedVehicle = vehicleSchemaWithId.parse(vehicle);

    return validatedVehicle;
  } catch (error) {
    console.error("Erreur lors de la récupération du véhicule :", error);
    throw new Error("Échec de la récupération du véhicule");
  }
};

export const createVehicle = async (formData: FormData) => {
  const validatedFields = vehicleSchemaWithoutId.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    throw new Error(
      "Validation échouée: " +
        JSON.stringify(validatedFields.error.flatten().fieldErrors)
    );
  }

  try {
    let imageUrl = null;
    const actualImageFile = formData.get("image") as File;

    if (actualImageFile && actualImageFile.size > 0) {
      const { data: imageData, error: uploadError } = await supabase.storage
        .from("images")
        .upload(
          `images/${actualImageFile.name}-${Date.now()}`,
          actualImageFile,
          {
            cacheControl: "2592000",
            contentType: actualImageFile.type,
          }
        );

      if (uploadError) {
        console.error("Erreur lors de l'upload de l'image :", uploadError);
        throw new Error("Erreur lors de l'upload de l'image");
      }

      imageUrl = imageData?.path;
    }

    const newVehicle = await prisma.vehicule.create({
      data: {
        name: validatedFields.data.name,
        kmNumber: validatedFields.data.kmNumber,
        boiteType: validatedFields.data.boiteType,
        carType: validatedFields.data.carType,
        price: validatedFields.data.price,
        premium: validatedFields.data.premium || false,
        sold: validatedFields.data.sold || false,
        tag: validatedFields.data.tag || null,
        imageUrl,
      },
    });

    revalidatePath("/", "layout");
    return { vehicleId: newVehicle.id };
  } catch (error) {
    console.error("Erreur lors de la création du véhicule :", error);
    return { message: "Échec de la création du véhicule", Error: error };
  }
};

export const updateVehicle = async (id: string, formData: FormData) => {
  const validatedFields = vehicleSchemaWithId.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const existingVehicle = await prisma.vehicule.findUnique({
      where: { id },
      select: { imageUrl: true },
    });

    if (!existingVehicle) {
      throw new Error("Véhicule non trouvé");
    }

    let imageUrl = existingVehicle.imageUrl;

    const actualImageFile = formData.get("image") as File;

    if (actualImageFile && actualImageFile.size > 0) {
      const { data: imageData, error: uploadError } = await supabase.storage
        .from("images")
        .upload(
          `images/${actualImageFile.name}-${Date.now()}`,
          actualImageFile,
          {
            cacheControl: "2592000",
            contentType: actualImageFile.type,
          }
        );

      if (uploadError) {
        console.error("Erreur lors de l'upload de l'image :", uploadError);
        throw new Error("Erreur lors de l'upload de l'image");
      }

      imageUrl = imageData?.path;

      if (existingVehicle.imageUrl) {
        const { error: deleteError } = await supabase.storage
          .from("images")
          .remove([existingVehicle.imageUrl]);

        if (deleteError) {
          console.error(
            "Erreur lors de la suppression de l'ancienne image :",
            deleteError
          );
          throw new Error("Erreur lors de la suppression de l'ancienne image");
        }
      }
    }

    const updatedVehicle = await prisma.vehicule.update({
      where: { id },
      data: {
        name: validatedFields.data.name,
        kmNumber: validatedFields.data.kmNumber,
        boiteType: validatedFields.data.boiteType,
        carType: validatedFields.data.carType,
        price: validatedFields.data.price,
        premium: validatedFields.data.premium,
        sold: validatedFields.data.sold,
        tag: validatedFields.data.tag || null,
        imageUrl,
      },
    });

    revalidatePath("/", "layout");
    return { vehicleId: updatedVehicle.id };
  } catch (error) {
    console.error("Erreur lors de la modification du véhicule :", error);
    return { message: "Échec de la modification du véhicule", Error: error };
  }
};

export const deleteVehicule = async (id: string) => {
  try {
    const vehicle = await prisma.vehicule.findUnique({
      where: { id },
    });

    if (!vehicle) {
      console.error("Véhicule non trouvé", id);
      throw new Error("Véhicule non trouvé");
    }

    if (vehicle.imageUrl) {
      const { error: deleteError } = await supabase.storage
        .from("images")
        .remove([vehicle.imageUrl]);

      if (deleteError) {
        console.error(
          "Erreur lors de la suppression de l'image :",
          deleteError
        );
        throw new Error("Erreur lors de la suppression de l'image");
      }
    }

    await prisma.vehicule.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Erreur lors de la suppression du véhicule :", error);
    throw new Error("Échec de la suppression du véhicule");
  }

  revalidatePath("/", "layout");
};

export const submitEstimation = async (formData: FormData) => {
  const validatedFields = estimationSchemaWithoutId.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    throw new Error(
      "Validation échouée: " +
        JSON.stringify(validatedFields.error.flatten().fieldErrors)
    );
  }

  try {
    const newEstimation = await prisma.estimation.create({
      data: {
        firstName: validatedFields.data.firstName,
        lastName: validatedFields.data.lastName,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
        postalCode: validatedFields.data.postalCode,
        brand: validatedFields.data.brand,
        model: validatedFields.data.model,
        fuelType: validatedFields.data.fuelType,
        boiteType: validatedFields.data.boiteType,
        kmNumber: validatedFields.data.kmNumber,
        immatriculation: validatedFields.data.immatriculation,
        sellingPeriod: validatedFields.data.sellingPeriod,
        buyingOption: validatedFields.data.buyingOption,
        purchaseDate: validatedFields.data.purchaseDate,
      },
    });


    revalidatePath("/services/estimation", "layout");
    return {
      message: "Estimation soumise avec succès",
      estimationId: newEstimation.id,
    };
  } catch (error) {
    console.error("Erreur lors du traitement de l'estimation :", error);
    return { message: "Échec du traitement de l'estimation", Error: error };
  }
};

export const getAllEstimations = async () => {
  try {
    const estimations = await prisma.estimation.findMany();

    const validatedEstimations = estimations.map((estimation) =>
      estimationSchemaWithId.parse(estimation)
    );

    return validatedEstimations;
  } catch (error) {
    throw new Error("Failed to fetch estimations data");
  }
};

export const getEstimationById = async (id: string) => {
  try {
    const estimation = await prisma.estimation.findUnique({
      where: { id },
    });

    if (!estimation) {
      throw new Error("Estimation non trouvée");
    }

    const validatedEstimation = estimationSchemaWithId.parse(estimation);

    return validatedEstimation;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'estimation :", error);
    throw new Error("Échec de la récupération de l'estimation");
  }
};


export const deleteEstimation = async (id: string) => {
  try {
    const estimation = await prisma.estimation.findUnique({
      where: { id },
    });

    if (!estimation) {
      console.error("Estimation non trouvée", id);
      throw new Error("Estimation non trouvée");
    }

    await prisma.estimation.delete({
      where: { id },
    });

  } catch (error) {
    console.error("Erreur lors de la suppression de l'estimation :", error);
    throw new Error("Échec de la suppression de l'estimation");
  }

  revalidatePath("/", "layout");
};

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// export async function signup(formData: FormData) {
//   const supabase = createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }
