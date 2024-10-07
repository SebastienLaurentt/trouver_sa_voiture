"use client";

import CarCard from "@/components/CarCard";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DualRangeSlider } from "@/components/ui/slider";
import { EditVehicleFormData } from "@/lib/schema";
import { Filter } from "lucide-react";
import React, { useEffect, useState } from "react";

interface VehiculesListProps {
  vehicles: EditVehicleFormData[];
}

const VehiculesList: React.FC<VehiculesListProps> = ({ vehicles }) => {
  const [filteredVehicles, setFilteredVehicles] =
    useState<EditVehicleFormData[]>(vehicles);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategoryType, setSelectedCategoryType] = useState<
    string | null
  >(null);
  const [selectedBoiteType, setSelectedBoiteType] = useState<string | null>(
    null
  );
  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    5000, 200000,
  ]);
  const [kmRange, setKmRange] = useState<[number, number]>([5000, 200000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const filtered = vehicles.filter(
      (vehicle) =>
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedBoiteType === null ||
          selectedBoiteType === "all" ||
          vehicle.boiteType === selectedBoiteType) &&
        (selectedCarType === null ||
          selectedCarType === "all" ||
          vehicle.carType === selectedCarType) &&
        (selectedCategoryType === null ||
          selectedCategoryType === "all" ||
          (selectedCategoryType === "Premium" && vehicle.premium) ||
          (selectedCategoryType === "Classique" && !vehicle.premium)) &&
        vehicle.price >= priceRange[0] &&
        vehicle.price <= priceRange[1] &&
        vehicle.kmNumber >= kmRange[0] &&
        vehicle.kmNumber <= kmRange[1]
    );
    setFilteredVehicles(filtered);
  }, [
    searchTerm,
    selectedBoiteType,
    selectedCarType,
    selectedCategoryType,
    priceRange,
    kmRange,
    vehicles,
  ]);

  return (
    <Section marginTop marginBottom classname="2xl:max-w-[1400px] relative">
      <div className="flex flex-col 2xl:flex-row 2xl:gap-6">
        <div className="mb-8 hidden 2xl:mb-0 2xl:block 2xl:w-1/4">
          <div className="card-glass-effect space-y-5  px-6 py-8 xl:px-12 2xl:sticky 2xl:top-24">
            <h2 className="mb-4 text-xl font-bold">Filtres</h2>
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
            <Select
              onValueChange={(value) =>
                setSelectedCategoryType(value === "all" ? null : value)
              }
              value={selectedCategoryType || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Catégorie de voiture" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Classique">Classique</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                setSelectedBoiteType(value === "all" ? null : value)
              }
              value={selectedBoiteType || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Boîte de vitesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Manuelle">Manuelle</SelectItem>
                <SelectItem value="Automatique">Automatique</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                setSelectedCarType(value === "all" ? null : value)
              }
              value={selectedCarType || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type de voiture" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Berline">Berline</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Citadine">Citadine</SelectItem>
              </SelectContent>
            </Select>
            <div className="pt-6">
              <DualRangeSlider
                defaultValue={[5000, 200000]}
                max={200000}
                min={5000}
                step={1000}
                onValueChange={(value: number[]) =>
                  setKmRange([value[0], value[1]])
                }
                unit="km"
              />
            </div>
            <div className="pt-8">
              <DualRangeSlider
                defaultValue={[5000, 200000]}
                max={200000}
                min={5000}
                step={1000}
                onValueChange={(value: number[]) =>
                  setPriceRange([value[0], value[1]])
                }
                unit="€"
              />
            </div>
          </div>
        </div>

        <div className="2xl:w-3/4">
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-x-4 2xl:gap-y-6">
              {filteredVehicles.map((vehicle, index) => (
                <li key={index} className="w-full list-none">
                  <CarCard
                    id={vehicle.id}
                    src={`https://aotdlnddxemcekzntizx.supabase.co/storage/v1/object/public/images/${vehicle.imageUrl}`}
                    price={vehicle.price}
                    boiteType={vehicle.boiteType}
                    carType={vehicle.carType}
                    kmNumber={vehicle.kmNumber}
                    name={vehicle.name}
                    sold={vehicle.sold}
                    tag={vehicle.tag || ""}
                  />
                </li>
              ))}
            </div>
          ) : (
            <p className="text-center">
              Aucun véhicule ne correspond à cette recherche !
            </p>
          )}
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <div className="sticky bottom-0 z-30 mt-4 flex justify-center bg-gradient-to-t from-background via-background/60 to-transparent py-4 2xl:hidden">
            <Button className="flex w-[200px] flex-row gap-x-2 bg-slate-200 px-8 py-2 text-slate-950 hover:bg-slate-200">
              Filtrer <Filter size={18} />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-[340px] ">
          <div className="space-y-5 px-6 py-8">
            <h2 className="mb-4 text-xl font-bold">Filtres</h2>
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
            <Select
              onValueChange={(value) =>
                setSelectedCategoryType(value === "all" ? null : value)
              }
              value={selectedCategoryType || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Catégorie de voiture" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Classique">Classique</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                setSelectedBoiteType(value === "all" ? null : value)
              }
              value={selectedBoiteType || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Boîte de vitesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Manuelle">Manuelle</SelectItem>
                <SelectItem value="Automatique">Automatique</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                setSelectedCarType(value === "all" ? null : value)
              }
              value={selectedCarType || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type de voiture" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="Berline">Berline</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Citadine">Citadine</SelectItem>
              </SelectContent>
            </Select>
            <div className="pt-6">
              <DualRangeSlider
                defaultValue={[5000, 200000]}
                max={200000}
                min={5000}
                step={1000}
                onValueChange={(value: number[]) =>
                  setKmRange([value[0], value[1]])
                }
                unit="km"
              />
            </div>
            <div className="pt-8">
              <DualRangeSlider
                defaultValue={[5000, 200000]}
                max={200000}
                min={5000}
                step={1000}
                onValueChange={(value: number[]) =>
                  setPriceRange([value[0], value[1]])
                }
                unit="€"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </Section>
  );
};

export default VehiculesList;
