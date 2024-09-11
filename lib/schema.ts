import { z } from "zod";

export const vehicleSchemaWithoutId = z.object({
  name: z.string().min(1, "Le nom est requis"),
  kmNumber: z.coerce.number().gte(1, "Le kilomètrage est requis"),
  boiteType: z.enum(["Manuelle", "Automatique"], {
    errorMap: () => ({ message: "Boite de vitesse requise" }),
  }),
  carType: z.enum(["Citadine", "Berline", "SUV"], {
    errorMap: () => ({ message: "Type de véhicule requis" }),
  }),
  price: z.coerce.number().gte(1, "Le prix est requis"),
  // Checkboxes in the user interface might not always return boolean values, especially when handled via HTML forms where they can return "true" or "false" as strings.
  // To ensure that the values processed by our schema are booleans, we use z.preprocess to normalize the inputs.
  // This function checks if the value is a string "true" or a boolean true and converts them to boolean true.
  // Other values (including "false" and false) are converted to boolean false by the z.boolean() validation.
  premium: z.preprocess((val) => val === "true" || val === true, z.boolean()),
  sold: z.preprocess((val) => val === "true" || val === true, z.boolean()),
  tag: z.string().optional(),
  imageUrl: z.any(),
});

export type CreateVehicleFormData = z.infer<typeof vehicleSchemaWithoutId>;

export const vehicleSchemaWithId = z.object({
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
  premium: z.preprocess((val) => val === "true" || val === true, z.boolean()),
  sold: z.preprocess((val) => val === "true" || val === true, z.boolean()),
  tag: z.string().optional().nullable(),
  imageUrl: z.any(),
});

export type EditVehicleFormData = z.infer<typeof vehicleSchemaWithId>;
