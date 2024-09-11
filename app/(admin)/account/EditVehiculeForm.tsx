"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import FormError from "@/components/FormError";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { updateVehicle } from "@/lib/actions";
import { EditVehicleFormData, vehicleSchemaWithId } from "@/lib/schema";


const EditVehiculeForm = ({
  vehicle,
  onClose,
}: {
  vehicle: EditVehicleFormData;
  onClose: () => void;
}) => {
  const [imageState, setImageState] = useState<{
    currentImage: string;
    newImage?: string;
    imageFile?: File;
  }>({
    currentImage: `https://aotdlnddxemcekzntizx.supabase.co/storage/v1/object/public/images/${vehicle.imageUrl}`,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<EditVehicleFormData>({
    resolver: zodResolver(vehicleSchemaWithId),
    defaultValues: {
      ...vehicle,
      kmNumber: Number(vehicle.kmNumber),
      price: Number(vehicle.price),
    },
  });

  const mutation = useMutation({
    mutationKey: ["update-vehicle"],
    mutationFn: async (data: EditVehicleFormData) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      if (imageState.imageFile) {
        formData.append("image", imageState.imageFile);
      }
      return updateVehicle(vehicle.id, formData);
    },
    onSuccess: () => {
      toast({ title: "Véhicule mis à jour avec succès !" });
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Échec de la mise à jour",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EditVehicleFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[500px] rounded-lg border border-white bg-background p-6 shadow-lg">
        <button
          className="absolute right-2 top-2 text-foreground hover:text-foreground/80"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="mb-4 text-xl font-bold">Modifier le véhicule</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <FormError message={errors.name.message} />}
          </div>

          <div>
            <Label htmlFor="kmNumber">Kilométrage</Label>
            <Input
              id="kmNumber"
              type="number"
              {...register("kmNumber", { valueAsNumber: true })}
            />
            {errors.kmNumber && <FormError message={errors.kmNumber.message} />}
          </div>

          <div>
            <Label htmlFor="price">Prix</Label>
            <Input
              id="price"
              type="number"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && <FormError message={errors.price.message} />}
          </div>

          <div className="flex flex-row gap-x-4">
            <div>
              <Label htmlFor="boiteType">Boîte de Vitesse</Label>
              <Controller
                name="boiteType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Choisir une boîte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Manuelle">Manuelle</SelectItem>
                        <SelectItem value="Automatique">Automatique</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.boiteType && <FormError message={errors.boiteType.message} />}
            </div>

            <div>
              <Label htmlFor="carType">Type de véhicule</Label>
              <Controller
                name="carType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Choisir un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Citadine">Citadine</SelectItem>
                        <SelectItem value="Berline">Berline</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.carType && <FormError message={errors.carType.message} />}
            </div>
          </div>

          <div>
            <Label htmlFor="tag">Tag (optionnel)</Label>
            <Controller
              name="tag"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Choisir un tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Idéal Jeune Conducteur">
                        Idéal Jeune Conducteur
                      </SelectItem>
                      <SelectItem value="Très peu de kilomètres">
                        Très peu de kilomètres
                      </SelectItem>
                      <SelectItem value="TVA Récupérable">
                        TVA Récupérable
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex flex-row gap-x-4">
            <div className="flex gap-x-2">
              <Controller
                name="premium"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="premium"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="premium">Premium</Label>
            </div>

            <div className="flex gap-x-2">
              <Controller
                name="sold"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="sold"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="sold">Vendu</Label>
            </div>
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="file"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setImageState((prevState) => ({
                      ...prevState,
                      newImage: e.target?.result as string,
                      imageFile: file,
                    }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          <div className="mt-3 flex flex-row gap-x-4">
            <div className="flex flex-col gap-y-1">
              <span className="italic">Image Actuelle</span>
              <Image
                alt="image du véhicule"
                src={imageState.currentImage}
                height={200}
                width={200}
                className="rounded-md"
                blurDataURL={imageState.currentImage}
              />
            </div>
            {imageState.newImage && (
              <div className="flex flex-col gap-y-1">
                <span className="italic">Nouvelle Image</span>
                <Image
                  alt="image sélectionnée"
                  src={imageState.newImage}
                  height={200}
                  width={200}
                  className="rounded-md"
                  blurDataURL={imageState.newImage}
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? (
              <span className="flex flex-row items-center gap-x-2">
                Mise à jour en cours <Loader color="border-slate-50" />
              </span>
            ) : (
              "Mettre à jour"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditVehiculeForm;
