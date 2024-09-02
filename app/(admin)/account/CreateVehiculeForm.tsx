"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      toast({ title: "Véhicule créé avec succès" });
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

    createVehicleMutation(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[500px] rounded-lg border border-white bg-background  p-6 shadow-lg">
        <button
          className="absolute right-2 top-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="mb-4 text-xl font-bold">Créer un nouveau véhicule</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="kmNumber">Kilométrage</Label>
            <Input
              id="kmNumber"
              type="number"
              value={kmNumber}
              onChange={(e) => setKmNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="boiteType">Type de transmission</Label>
            <Input
              id="boiteType"
              type="text"
              value={boiteType}
              onChange={(e) => setBoiteType(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="carType">Type de véhicule</Label>
            <Input
              id="carType"
              type="text"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="price">Prix</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
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
