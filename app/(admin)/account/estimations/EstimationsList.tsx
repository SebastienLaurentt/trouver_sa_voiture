"use client";

import { Eye } from "lucide-react";
import { DeleteEstimation } from "./DeleteEstimation";
import Link from "next/link";

const EstimationsList = ({ allEstimations }: { allEstimations: any }) => {
  return (
    <div className="mx-auto max-w-7xl rounded-lg border border-white px-8 py-10">
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
            <th className="border px-4 py-2">Actions</th>
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
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2 ">
                <div className="flex  justify-center gap-x-4">
                  <Link href={`/account/estimations/${estimation.id}`}>
                    <Eye
                      size={22}
                      className="text-blue-500 hover:text-blue-700"
                    />
                  </Link>
                  <DeleteEstimation id={estimation.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstimationsList;
