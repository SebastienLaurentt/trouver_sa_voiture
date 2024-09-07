"use server";

import { z } from "zod";

import { prisma } from "./prisma";
import { supabase } from "./supabase";

const VehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  kmNumber: z.number(),
  boiteType: z.string(),
  carType: z.string(),
  price: z.number(),
  premium: z.boolean(),
  sold: z.boolean(),
  tag: z.string().optional().nullable(),  
  imageUrl: z.any(),
});


export const getAllVehiclesList = async () => {
  try {
    const vehicles = await prisma.vehicule.findMany();

    const validatedVehicles = vehicles.map((vehicle) =>
      VehicleSchema.parse(vehicle)
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
      VehicleSchema.parse(vehicle)
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
      VehicleSchema.parse(vehicle)
    );

    return validatedVehicles;
  } catch (error) {
    throw new Error("Failed to fetch non-premium vehicles data");
  }
};

export const createVehicle = async (formData: FormData) => {
  // Conversion des données du formulaire en objet
  const data = Object.fromEntries(formData.entries());

  // Préparation des données
  const parsedData = {
    ...data,
    kmNumber: parseFloat(data.kmNumber as string),
    price: parseFloat(data.price as string),
    premium: data.premium === "true",
    sold: data.sold === "true",
    tag: data.tag ? data.tag : undefined,
  };

  // Validation des champs
  const validatedFields = VehicleSchema.safeParse(parsedData);

  if (!validatedFields.success) {
    console.error("Validation failed:", validatedFields.error.flatten().fieldErrors);
    return {
      Error: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the input fields.",
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

    console.log("Véhicule créé avec succès :", newVehicle);
    return { vehicleId: newVehicle.id };
  } catch (error) {
    console.error("Erreur lors de la création du véhicule :", error);
    return { message: "Échec de la création du véhicule", Error: error };
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

    await prisma.vehicule.delete({
      where: { id },
    });

  } catch (error) {
    throw new Error("Échec de la suppression du véhicule");
  }
}
