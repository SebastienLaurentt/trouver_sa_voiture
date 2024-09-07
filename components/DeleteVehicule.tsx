"use client";


import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { deleteVehicule } from "@/lib/actions";

import { useMutation } from "@tanstack/react-query";
import { Trash } from "lucide-react";

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
    >
      <Button size="sm" disabled={isPending}>
        {isPending ? (
          <span className="flex flex-row items-center gap-x-2">
            &quot;Suppression en cours...&quot;
          </span>
        ) : (
          <Trash />
        )}
      </Button>
    </form>
  );
};
