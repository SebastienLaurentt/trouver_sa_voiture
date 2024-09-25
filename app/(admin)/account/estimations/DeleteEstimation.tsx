"use client";

import Loader from "@/components/Loader";
import { toast } from "@/components/ui/use-toast";
import { deleteEstimation } from "@/lib/actions";
import { useMutation } from "@tanstack/react-query";
import { Trash } from "lucide-react";

export const DeleteEstimation = ({ id }: { id: string }) => {
  const { mutate: deleteEstimationMutation, isPending } = useMutation({
    mutationKey: ["delete-estimation"],
    mutationFn: () => deleteEstimation(id),
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
        deleteEstimationMutation();
      }}
      className="flex"
    >
      <button disabled={isPending}>
        {isPending ? (
          <span className="flex flex-row items-center gap-x-2">
            <Loader color="border-red-500" />
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
