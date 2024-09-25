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


export const estimationSchemaWithoutId = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("L'email n'est pas valide"),
  phone: z.string().min(10, "Le numéro doit avoir au moins 10 chiffres"),
  postalCode: z.string().min(5, "Le code postal doit avoir au moins 5 chiffres"),
  brand: z.string().min(1, "La marque est requise"),
  model: z.string().min(1, "Le modèle est requis"),
  fuelType: z.enum(["Diesel", "Essence", "Autre"], {
    errorMap: () => ({ message: "Type de carburant requis" }),
  }),
  boiteType: z.enum(["Manuelle", "Automatique"], {
    errorMap: () => ({ message: "Type de boîte de vitesse requis" }),
  }),
  kmNumber: z.coerce.number().gte(1, "Le kilometrage est requis"),
  immatriculation: z.string().min(1, "L'immatriculation est requise"),
  sellingPeriod: z.enum(["Dès que possible", "Dans les 3 mois", "Dans les 6 mois", "Je ne souhaite pas vendre"], {
    errorMap: () => ({ message: "Ce choix est requis" }),
  }),
  buyingOption: z.enum(["Oui, une voiture neuve", "Oui, une voiture d'occasion", "Non, je n'ai pas de projet d'achat"], {
    errorMap: () => ({ message: "Ce choix est requis" }),
  }),
  purchaseDate: z.string().min(1, "La date d'achat est requise"),
});

export type CreateEstimationData = z.infer<typeof estimationSchemaWithoutId>;


export const estimationSchemaWithId = z.object({
  id: z.string(),
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("L'email n'est pas valide"),
  phone: z.string().min(10, "Le numéro doit avoir au moins 10 chiffres"),
  postalCode: z.string().min(5, "Le code postal doit avoir au moins 5 chiffres"),
  brand: z.string().min(1, "La marque est requise"),
  model: z.string().min(1, "Le modèle est requis"),
  fuelType: z.enum(["Diesel", "Essence", "Autre"], {
    errorMap: () => ({ message: "Type de carburant requis" }),
  }),
  boiteType: z.enum(["Manuelle", "Automatique"], {
    errorMap: () => ({ message: "Type de boîte de vitesse requis" }),
  }),
  kmNumber: z.coerce.number().gte(1, "Le kilometrage est requis"),
  immatriculation: z.string().min(1, "L'immatriculation est requise"),
  sellingPeriod: z.enum(["Dès que possible", "Dans les 3 mois", "Dans les 6 mois", "Je ne souhaite pas vendre"], {
    errorMap: () => ({ message: "Ce choix est requis" }),
  }),
  buyingOption: z.enum(["Oui, une voiture neuve", "Oui, une voiture d'occasion", "Non, je n'ai pas de projet d'achat"], {
    errorMap: () => ({ message: "Ce choix est requis" }),
  }),
  purchaseDate: z.string().min(1, "La date d'achat est requise"),
});

export type GetEstimationData = z.infer<typeof estimationSchemaWithId>;
