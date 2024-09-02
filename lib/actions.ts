"use server";

import { z } from "zod";

import { prisma } from "./prisma";

const VehicleSchema = z.object({
  name: z.string().min(1, "Name is required"),
  kmNumber: z.number().int().positive("Kilometers must be a positive number"),
  boiteType: z.string().min(1, "Transmission type is required"),
  carType: z.string().min(1, "Car type is required"),
  price: z.number().positive("Price must be a positive number")
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
      },
    });

    console.log("Vehicle created successfully:", newVehicle);
    return { vehicleId: newVehicle.id };
  } catch (error) {
    console.error("Error creating vehicle:", error);
    return { message: "Failed to create new vehicle", Error: error };
  }
};
