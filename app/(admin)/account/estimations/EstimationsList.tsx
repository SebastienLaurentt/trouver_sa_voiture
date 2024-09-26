"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { DeleteEstimation } from "./DeleteEstimation";

const EstimationsList = ({ allEstimations }: { allEstimations: any }) => {
  return (
    <>
      <h2 className="text-2xl font-bold">Liste des Estimations</h2>
      <div className="flex flex-row justify-between py-4"></div>

      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="text-left">
            <th className=" w-[200px] border px-4 py-2">Prénom</th>
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Téléphone</th>
            <th className="border px-4 py-2">Marque</th>
            <th className="border px-4 py-2">Modèle</th>
            <th className="border px-4 py-2">Année</th>
            <th className="border px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allEstimations.map((estimation: any, index: any) => (
            <tr key={index}>
              <td className="border px-4 py-2">{estimation.firstName}</td>
              <td className="border px-4 py-2">{estimation.lastName}</td>
              <td className="border px-4 py-2">{estimation.email}</td>
              <td className="border px-4 py-2">{estimation.phone}</td>
              <td className="border px-4 py-2">{estimation.brand}</td>
              <td className="border px-4 py-2">{estimation.model}</td>
              <td className="border px-4 py-2">{estimation.purchaseDate}</td>
              <td className="border px-4 py-2 ">
                <div className="flex  justify-center gap-x-4">
                  <Link href={`/account/estimations/${estimation.id}`}>
                    <Eye
                      size={22}
                      className="text-primary hover:text-blue-700"
                    />
                  </Link>
                  <DeleteEstimation id={estimation.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EstimationsList;
