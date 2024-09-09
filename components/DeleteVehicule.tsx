"use client";

import { toast } from "@/components/ui/use-toast";
import { deleteVehicule } from "@/lib/actions";

import { useMutation } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import Loader from "./Loader";

export const DeleteVehicle = ({ id }: { id: string }) => {
  const { mutate: deleteVehicleMutation, isPending } = useMutation({
    mutationKey: ["delete-vehicle"],
    mutationFn: () => deleteVehicule(id),
    onMutate: () => {},
    onSuccess: () => {
      toast({ title: "Véhicule supprimé !" });
    },
    onError: (error: any) => {
      toast({
        title: "Échec de la suppression",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deleteVehicleMutation();
      }}
      className="flex"
    >
      <button disabled={isPending}>
        {isPending ? (
          <span className="flex flex-row items-center gap-x-2">
            <Loader color="red" />
          </span>
        ) : (
          <span className="text-red-500 hover:text-red-700">
            <Trash size={22} />
          </span>
        )}
      </button>
    </form>
  );
};
