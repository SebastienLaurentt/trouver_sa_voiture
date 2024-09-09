"use client";

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
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const EditVehiculeForm = ({
  vehicle,
  onClose,
}: {
  vehicle: any;
  onClose: () => void;
}) => {
  const [id, setId] = useState(vehicle.id);  // Stockez l'ID
  const [name, setName] = useState(vehicle.name);
  const [kmNumber, setKmNumber] = useState(vehicle.kmNumber);
  const [boiteType, setBoiteType] = useState(vehicle.boiteType);
  const [carType, setCarType] = useState(vehicle.carType);
  const [price, setPrice] = useState(vehicle.price);
  const [premium, setPremium] = useState(vehicle.premium);
  const [sold, setSold] = useState(vehicle.sold);
  const [tag, setTag] = useState(vehicle.tag);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {
    mutate: updateVehicleMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["update-vehicle"],
    mutationFn: async (formData: FormData) => {
      try {
        const result = await updateVehicle(vehicle.id, formData);
        return result;
      } catch (error) {
        throw new Error("Échec de la mise à jour du véhicule");
      }
    },
    onSuccess: () => {
      toast({ title: "Véhicule mis à jour avec succès !" });
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "Échec de la mise à jour",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file);  // Mettre à jour l'état avec le fichier sélectionné
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("id", id);  
    formData.set("name", name);
    formData.set("kmNumber", kmNumber);
    formData.set("boiteType", boiteType);
    formData.set("carType", carType);
    formData.set("price", price);
    formData.set("premium", premium.toString());
    formData.set("sold", sold.toString());
    if (tag) formData.set("tag", tag);
    if (imageFile) formData.set("image", imageFile);  // Ajoutez l'image sélectionnée

    console.log("formData", formData);
    updateVehicleMutation(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[500px] rounded-lg border border-white bg-background p-6 shadow-lg">
        <button
          className="absolute right-2 top-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="mb-4 text-xl font-bold">Modifier le véhicule</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="kmNumber">Kilométrage</Label>
            <Input
              id="kmNumber"
              type="number"
              value={kmNumber}
              onChange={(e) => setKmNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="boiteType">Boîte de Vitesse</Label>
            <Select
              value={boiteType}
              onValueChange={(value) => setBoiteType(value)}
            >
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
          </div>

          <div>
            <Label htmlFor="carType">Type de véhicule</Label>
            <Select
              value={carType}
              onValueChange={(value) => setCarType(value)}
            >
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
          </div>

          <div>
            <Label htmlFor="price">Prix</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-x-2">
            <Checkbox
              id="premium"
              checked={premium}
              onCheckedChange={(value) => setPremium(value)}
            />
            <Label htmlFor="premium">Premium</Label>
          </div>

          <div className="flex gap-x-2">
            <Checkbox
              id="sold"
              checked={sold}
              onCheckedChange={(value) => setSold(value)}
            />
            <Label htmlFor="sold">Vendu</Label>
          </div>

          <div>
            <Label htmlFor="tag">Tag (optionnel)</Label>
            <Select value={tag} onValueChange={(value) => setTag(value)}>
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
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="file"
              onChange={handleImageChange}
            />
          </div>

          <div className="mt-3 flex flex-row gap-x-4">
            <div className="flex flex-col gap-y-1">
              <span className="italic">Image Actuelle</span>
              <Image
                alt="image du véhicule"
                src={`https://aotdlnddxemcekzntizx.supabase.co/storage/v1/object/public/images/${vehicle.imageUrl}`}
                height={200}
                width={200}
                className="rounded-md"
                blurDataURL={`https://aotdlnddxemcekzntizx.supabase.co/storage/v1/object/public/images/${vehicle.imageUrl}`}
              />
            </div>
            {selectedImage && (
              <div className="flex flex-col gap-y-1">
                <span className="italic">Nouvelle Image</span>
                <Image
                  alt="image sélectionnée"
                  src={selectedImage}
                  height={200}
                  width={200}
                  className="rounded-md"
                  blurDataURL={selectedImage}
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={isPending}>
            {isPending || isSuccess ? (
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
