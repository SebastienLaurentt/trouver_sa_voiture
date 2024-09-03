"use server";

import { z } from "zod";

import { prisma } from "./prisma";

const VehicleSchema = z.object({
  name: z.string(),
  kmNumber: z.number(),
  boiteType: z.string(),
  carType: z.string(),
  price: z.number(),
  premium: z.boolean(),
  sold: z.boolean(),
  tag: z.string().optional().nullable(),  
});

export const getVehiclesList = async () => {
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

export const createVehicle = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const parsedData = {
    ...data,
    kmNumber: parseFloat(data.kmNumber as string),
    price: parseFloat(data.price as string),
    premium: data.premium === "true",  
    sold: data.sold === "true",        
    tag: data.tag ? data.tag : undefined, 
  };

  const validatedFields = VehicleSchema.safeParse(parsedData);

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
      },
    });

    console.log("Vehicle created successfully:", newVehicle);
    return { vehicleId: newVehicle.id };
  } catch (error) {
    console.error("Error creating vehicle:", error);
    return { message: "Failed to create new vehicle", Error: error };
  }
};
