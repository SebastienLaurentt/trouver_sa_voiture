"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import CreateVehiculeForm from "./CreateVehiculeForm";
import { DeleteVehicle } from "@/components/DeleteVehicule";

const VehiculeList = ({ allVehicles }: { allVehicles: any }) => {
  const [isFileInputVisible, setIsFileInputVisible] = useState(false);
  console.log(allVehicles);

  return (
    <div className="mx-auto max-w-6xl rounded-lg border border-white px-8 py-10">
      <h1 className="text-2xl font-bold">Liste des Véhicules</h1>
      <div className="flex flex-row justify-between py-4">
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-row gap-x-2">
            <Button
              className="space-x-[5px]"
              onClick={() => setIsFileInputVisible(true)}
            >
              <CirclePlus size={20} /> <span>Ajouter Véhicule</span>
            </Button>
          </div>
        </div>
      </div>

      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="text-left">
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Kilomètres</th>
            <th className="border px-4 py-2">Boîte</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Prix</th>
            <th className="border px-4 py-2">Premium</th>
            <th className="border px-4 py-2">Vendu</th>
            <th className="border px-4 py-2">Tag</th>
            <th className="border px-4 py-2">Éditer</th>
          </tr>
        </thead>
        <tbody>
          {allVehicles.map((vehicle: any, index: any) => (
            <tr key={index}>
              <td className="border px-4 py-2">{vehicle.name}</td>
              <td className="border px-4 py-2">{vehicle.kmNumber}</td>
              <td className="border px-4 py-2">{vehicle.boiteType}</td>
              <td className="border px-4 py-2">{vehicle.carType}</td>
              <td className="border px-4 py-2">{vehicle.price} €</td>
              <td className="border px-4 py-2">
                {vehicle.premium ? "Oui" : "Non"}
              </td>
              <td className="border px-4 py-2">
                {vehicle.sold ? "Vendu" : "Disponible"}
              </td>
              <td className="border px-4 py-2">
                {vehicle.tag ? vehicle.tag : "Aucun"}
              </td>
              <td className="border px-4 py-2">
                <DeleteVehicle id={vehicle.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFileInputVisible && (
        <CreateVehiculeForm onClose={() => setIsFileInputVisible(false)} />
      )}
    </div>
  );
};

export default VehiculeList;
