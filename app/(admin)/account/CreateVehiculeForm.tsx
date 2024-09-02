"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { createVehicle } from "@/lib/actions";

import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const CreateVehiculeForm = () => {
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
        throw new Error("Failed to create vehicle");
      }
    },
    onSuccess: () => {
      setName("");
      setKmNumber("");
      setBoiteType("");
      setCarType("");
      setPrice("");
      toast({ title: "Vehicle created successfully" });
    },
    onError: (error) => {
      setError(error.message || "An unexpected error occurred.");
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
    <div className="mx-auto  w-[500px] py-20">
      <h2 className="mb-4 text-xl font-bold">Create New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="kmNumber">Kilometers</Label>
          <Input
            id="kmNumber"
            type="number"
            value={kmNumber}
            onChange={(e) => setKmNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="boiteType">Transmission Type</Label>
          <Input
            id="boiteType"
            type="text"
            value={boiteType}
            onChange={(e) => setBoiteType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="carType">Car Type</Label>
          <Input
            id="carType"
            type="text"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="price">Price</Label>
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
            ? "Creating..."
            : isSuccess
            ? "Created!"
            : "Create Vehicle"}
        </Button>
      </form>
    </div>
  );
};

export default CreateVehiculeForm;
