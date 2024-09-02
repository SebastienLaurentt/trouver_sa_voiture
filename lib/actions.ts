import { z } from "zod";

import { prisma } from "./prisma";

const VehicleSchema = z.object({
  id: z.number(), 
  name: z.string(), 
  kmNumber: z.number(), 
  boiteType: z.string(), 
  carType: z.string(), 
  price: z.number(), 
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
