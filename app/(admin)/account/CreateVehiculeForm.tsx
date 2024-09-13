import FormError from "@/components/FormError";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { createVehicle } from "@/lib/actions";
import { CreateVehicleFormData, vehicleSchemaWithoutId } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const CreateVehiculeForm = ({ onClose }: { onClose: () => void }) => {
  const [image, setImage] = useState<{
    file: File | null;
    preview: string | null;
  }>({
    file: null,
    preview: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateVehicleFormData>({
    resolver: zodResolver(vehicleSchemaWithoutId),
    defaultValues: {
      premium: false,
      sold: false,
    },
  });

  const mutation = useMutation({
    mutationKey: ["create-vehicle"],
    mutationFn: async (data: CreateVehicleFormData) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (typeof value !== "undefined") {
          formData.append(key, value.toString());
        }
      });

      if (image.file) {
        formData.append("image", image.file);
      }

      return createVehicle(formData);
    },
    onSuccess: () => {
      toast({ title: "Véhicule créé avec succès !" });
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Erreur lors de la création du véhicule",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CreateVehicleFormData) => {
    mutation.mutate(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage({ file, preview: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      setImage({ file: null, preview: null });
    }
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
        <h2 className="mb-4 text-xl font-bold">Ajouter un nouveau véhicule</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input id="name" {...register("name")} placeholder="Nom du véhicule" />
            {errors.name && <FormError message={errors.name.message} />}
          </div>

          <div>
            <Label htmlFor="kmNumber">Kilométrage</Label>
            <Input id="kmNumber" type="number" {...register("kmNumber")} placeholder="Kilométrage du véhicule"/>
            {errors.kmNumber && <FormError message={errors.kmNumber.message} />}
          </div>

          <div>
            <Label htmlFor="price">Prix</Label>
            <Input id="price" type="number" {...register("price")} placeholder="Prix du véhicule" />
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
                      <SelectItem value="Manuelle">Manuelle</SelectItem>
                      <SelectItem value="Automatique">Automatique</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.boiteType && (
                <FormError message={errors.boiteType.message} />
              )}
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
                      <SelectItem value="Citadine">Citadine</SelectItem>
                      <SelectItem value="Berline">Berline</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
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
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Choisir un tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Idéal Jeune Conducteur">
                      Idéal Jeune Conducteur
                    </SelectItem>
                    <SelectItem value="Très peu de kilomètres">
                      Très peu de kilomètres
                    </SelectItem>
                    <SelectItem value="TVA Récupérable">
                      TVA Récupérable
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex flex-row gap-x-4">
            <div className="flex flex-row items-center gap-x-2">
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

            <div className="flex flex-row items-center gap-x-2">
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
            <Label htmlFor="image">Image du véhicule</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              required
              onChange={handleImageChange}
            />
            {image.preview && (
              <div className="mt-2">
                <span className="italic">Aperçu Image</span>
                <Image
                  alt="Aperçu de l'image sélectionnée"
                  src={image.preview}
                  height={200}
                  width={200}
                  className="rounded-md"
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Création en cours..." : "Créer le véhicule"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateVehiculeForm;
