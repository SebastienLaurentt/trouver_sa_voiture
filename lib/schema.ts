import { z } from "zod";

export const createVehicleSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  kmNumber: z.number().min(0, "Le kilométrage doit être positif"),
  boiteType: z.enum(["Manuelle", "Automatique"]),
  carType: z.enum(["Citadine", "Berline", "SUV"]),
  price: z.number().min(0, "Le prix doit être positif"),
  premium: z.boolean(),
  sold: z.boolean(),
  tag: z.string().optional(),
  imageUrl: z.any(),
});

export type CreateVehicleFormData = z.infer<typeof createVehicleSchema>;

export const VehicleSchemaWithId = z.object({
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