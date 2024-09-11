import { z } from "zod";

export const createVehicleSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  kmNumber: z.coerce.number().gte(1, "Le kilomètrage est requis"),
  boiteType: z.enum(["Manuelle", "Automatique"], {
    errorMap: () => ({ message: "Boite de vitesse requise" }),
  }),
  carType: z.enum(["Citadine", "Berline", "SUV"], {
    errorMap: () => ({ message: "Type de véhicule requis" }),
  }),
  price: z.coerce.number().gte(1, "Le prix est requis"),
  premium: z.coerce.boolean(),
  sold: z.coerce.boolean(),
  tag: z.string().optional(),
  imageUrl: z.any(),
});

export type CreateVehicleFormData = z.infer<typeof createVehicleSchema>;

export const VehicleSchemaWithId = z.object({
  id: z.string(),
  name: z.string().min(1, "Le nom est requis"),
  kmNumber: z.coerce.number().gte(1, "Le kilomètrage est requis"),
  boiteType: z.enum(["Manuelle", "Automatique"], {
    errorMap: () => ({ message: "Boite de vitesse requise" }),
  }),
  carType: z.enum(["Citadine", "Berline", "SUV"], {
    errorMap: () => ({ message: "Type de véhicule requis" }),
  }),
  price: z.coerce.number().gte(1, "Le prix est requis"),
  premium: z.coerce.boolean(),
  sold: z.coerce.boolean(),
  tag: z.string().optional().nullable(),
  imageUrl: z.any(),
});

export type EditVehicleFormData = z.infer<typeof VehicleSchemaWithId>;
