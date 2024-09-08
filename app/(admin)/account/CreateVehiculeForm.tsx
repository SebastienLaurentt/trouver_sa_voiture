"use client";

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
import { createVehicle } from "@/lib/actions";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import React, { useState } from "react";

const CreateVehiculeForm = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [kmNumber, setKmNumber] = useState("");
  const [boiteType, setBoiteType] = useState("");
  const [carType, setCarType] = useState("");
  const [price, setPrice] = useState("");
  const [premium, setPremium] = useState(false);
  const [sold, setSold] = useState(false);
  const [tag, setTag] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null); 
  const [error, setError] = useState("");

  const {
    mutate: createVehicleMutation,
    isPending,
    isSuccess,
    isError,
    error: mutationError,
  } = useMutation({
    mutationKey: ["create-vehicle"],
    mutationFn: async (formData: FormData) => {
      try {
        const result = await createVehicle(formData);
        return result;
      } catch (error) {
        throw new Error("Échec de la création du véhicule");
      }
    },
    onSuccess: () => {
      setName("");
      setKmNumber("");
      setBoiteType("");
      setCarType("");
      setPrice("");
      setPremium(false);
      setSold(false);
      setTag("");
      setImageFile(null); 
      toast({ title: "Véhicule créé avec succès" });
      onClose();
    },
    onError: (error) => {
      setError(error.message || "Une erreur inattendue est survenue.");
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("kmNumber", kmNumber);
    formData.set("boiteType", boiteType);
    formData.set("carType", carType);
    formData.set("price", price);
    formData.set("premium", premium.toString());
    formData.set("sold", sold.toString());
    if (tag) formData.set("tag", tag);
    if (imageFile) formData.set("image", imageFile); 

    createVehicleMutation(formData);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
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
        <h2 className="mb-4 text-xl font-bold">Ajouter un nouveau véhicule</h2>
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

          <div className="flex flex-row items-center gap-x-2">
            <Checkbox
              id="premium"
              checked={premium}
              onCheckedChange={(checked) => setPremium(!!checked)}
            />
            <Label htmlFor="premium">Premium</Label>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <Checkbox
              id="sold"
              checked={sold}
              onCheckedChange={(checked) => setSold(!!checked)}
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
            <Label htmlFor="image">Image du véhicule</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {isError && <p className="text-red-500">{error}</p>}
          <Button type="submit" disabled={isPending}>
            {isPending
              ? "Création en cours..."
              : isSuccess
              ? "Créé !"
              : "Créer véhicule"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateVehiculeForm;
