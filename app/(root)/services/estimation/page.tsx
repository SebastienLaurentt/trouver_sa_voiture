"use client";

import FormError from "@/components/FormError";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { submitEstimation } from "@/lib/actions";
import { CreateEstimationData, estimationSchemaWithoutId } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

const Estimation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateEstimationData>({
    resolver: zodResolver(estimationSchemaWithoutId),
    defaultValues: {
      purchaseDate: "",
    },
  });

  const mutation = useMutation({
    mutationKey: ["submit-estimation"],
    mutationFn: async (data: CreateEstimationData) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      return submitEstimation(formData);
    },
    onSuccess: () => {
      toast({
        title: "Demande d'estimation envoyée avec succès !",
        description: "Nous vous recontacterons dans les plus brefs délais. ",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erreur lors de la soumission de l'estimation",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CreateEstimationData) => {
    mutation.mutate(data);
  };

  return (
    <main>
      <PageHeader
        title="Estimez la valeur de votre véhicule"
        description="Obtenez une estimation précise et rapide pour connaître la valeur réelle de votre voiture sur le marché actuel."
      />
      <Section marginTop marginBottom>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-[325px] space-y-6 rounded-xl border p-6 shadow shadow-slate-800 md:w-auto    xl:mx-20 xl:p-8"
        >
          {/* Vehicule Informations */}
          <div>
            <span className="text-xl  font-bold text-muted-foreground">
              Informations du véhicule
            </span>
            <div className="mt-1.5 space-y-3">
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="md:w-1/2">
                  <Label htmlFor="brand">Marque</Label>
                  <Input
                    id="brand"
                    {...register("brand")}
                    placeholder="Marque de votre véhicule"
                  />
                  {errors.brand && <FormError message={errors.brand.message} />}
                </div>
                <div className="md:w-1/2">
                  <Label htmlFor="model">Modèle</Label>
                  <Input
                    id="model"
                    {...register("model")}
                    placeholder="Modèle de votre véhicule"
                  />
                  {errors.model && <FormError message={errors.model.message} />}
                </div>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="flex flex-col gap-y-1.5 md:w-1/2">
                  <Label htmlFor="purchaseDate">Date d&apos;achat</Label>
                  <Controller
                    name="purchaseDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        onChange={(date) => {
                          if (date) {
                            const formattedDate = date
                              .toISOString()
                              .split("T")[0];
                            field.onChange(formattedDate);
                          } else {
                            field.onChange("");
                          }
                        }}
                        value={field.value ? new Date(field.value) : undefined}
                      />
                    )}
                  />
                  {errors.purchaseDate && (
                    <FormError message={errors.purchaseDate.message} />
                  )}
                </div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="md:w-1/2">
                  <Label htmlFor="fuelType">Type de carburant</Label>
                  <Controller
                    name="fuelType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choisir un type de carburant" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="Essence">Essence</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.fuelType && (
                    <FormError message={errors.fuelType.message} />
                  )}
                </div>
                <div className="md:w-1/2">
                  <Label htmlFor="boiteType">Type de boîte</Label>
                  <Controller
                    name="boiteType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choisir une boîte" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Manuelle">Manuelle</SelectItem>
                          <SelectItem value="Automatique">
                            Automatique
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.boiteType && (
                    <FormError message={errors.boiteType.message} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="md:w-1/2">
                  <Label htmlFor="kmNumber">Kilométrage</Label>
                  <Input
                    id="kmNumber"
                    type="number"
                    {...register("kmNumber")}
                    placeholder="Kilométrage du véhicule"
                  />
                  {errors.kmNumber && (
                    <FormError message={errors.kmNumber.message} />
                  )}
                </div>
                <div className="md:w-1/2">
                  <Label htmlFor="immatriculation">Immatriculation</Label>
                  <Input
                    id="immatriculation"
                    {...register("immatriculation")}
                    placeholder="Immatriculation du véhicule"
                  />
                  {errors.immatriculation && (
                    <FormError message={errors.immatriculation.message} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="md:w-1/2">
                  <Label htmlFor="sellingPeriod">
                    Quand souhaitez vous vendre ?
                  </Label>
                  <Controller
                    name="sellingPeriod"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choisir une période de vente" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dès que possible">
                            Dès que possible
                          </SelectItem>
                          <SelectItem value="Dans les 3 mois">
                            Dans les 3 mois
                          </SelectItem>
                          <SelectItem value="Dans les 6 mois">
                            Dans les 6 mois
                          </SelectItem>
                          <SelectItem value="Je ne souhaite pas vendre">
                            Je ne souhaite pas vendre
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.sellingPeriod && (
                    <FormError message={errors.sellingPeriod.message} />
                  )}
                </div>
                <div className="md:w-1/2">
                  <Label htmlFor="buyingOption">
                    Que souhaitez vous acheter ?
                  </Label>
                  <Controller
                    name="buyingOption"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choisir une option d'achat" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Oui, une voiture neuve">
                            Oui, une voiture neuve
                          </SelectItem>
                          <SelectItem value="Oui, une voiture d'occasion">
                            Oui, une voiture d&apos;occasion
                          </SelectItem>
                          <SelectItem value="Non, je n'ai pas de projet d'achat">
                            Non, je n&apos;ai pas de projet d&apos;achat
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.buyingOption && (
                    <FormError message={errors.buyingOption.message} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Informations */}
          <div>
            <span className="text-xl font-bold text-muted-foreground">
              Informations personnelles
            </span>
            <div className="mt-1.5 space-y-3">
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="md:w-1/2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && (
                    <FormError message={errors.firstName.message} />
                  )}
                </div>
                <div className="md:w-1/2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Votre nom"
                  />
                  {errors.lastName && (
                    <FormError message={errors.lastName.message} />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <div className="md:w-1/2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Votre adresse email"
                  />
                  {errors.email && <FormError message={errors.email.message} />}
                </div>
                <div className="md:w-1/2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Votre numéro de téléphone"
                  />
                  {errors.phone && <FormError message={errors.phone.message} />}
                </div>
              </div>
              <div className="md:w-1/2">
                <Label htmlFor="postalCode">Code postal</Label>
                <Input
                  id="postalCode"
                  {...register("postalCode")}
                  placeholder="Votre code postal"
                />
                {errors.postalCode && (
                  <FormError message={errors.postalCode.message} />
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="gap-x-2"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}{" "}
            <Send size={16} />
          </Button>

          {mutation.isError && (
            <div className="mt-4">
              <p className="text-red-500">
                Erreur : {(mutation.error as Error).message}
              </p>
            </div>
          )}
        </form>
      </Section>
    </main>
  );
};

export default Estimation;
