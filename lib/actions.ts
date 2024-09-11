"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { createVehicleSchema, VehicleSchemaWithId } from "./schema";
import { createClient } from "./server";
import { supabase } from "./supabase";

export const getAllVehiclesList = async () => {
  try {
    const vehicles = await prisma.vehicule.findMany();

    const validatedVehicles = vehicles.map((vehicle) =>
      VehicleSchemaWithId.parse(vehicle)
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
      VehicleSchemaWithId.parse(vehicle)
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
      VehicleSchemaWithId.parse(vehicle)
    );

    return validatedVehicles;
  } catch (error) {
    throw new Error("Failed to fetch non-premium vehicles data");
  }
};

export const createVehicle = async (formData: FormData) => {
  const validatedFields = createVehicleSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
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
        premium: validatedFields.data.premium,
        sold: validatedFields.data.sold,
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
  const data = Object.fromEntries(formData.entries());

  const parsedData = {
    id,
    ...data,
    kmNumber: parseFloat(data.kmNumber as string),
    price: parseFloat(data.price as string),
    premium: data.premium === "true",
    sold: data.sold === "true",
    tag: data.tag ? data.tag : undefined,
  };

  const validatedFields = VehicleSchemaWithId.safeParse(parsedData);

  if (!validatedFields.success) {
    console.error(
      "Validation failed:",
      validatedFields.error.flatten().fieldErrors
    );
    return {
      Error: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the input fields.",
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
