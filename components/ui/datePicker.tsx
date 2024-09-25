"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { fr } from "date-fns/locale";

// Fonction pour formater la date en français avec le mois en majuscule
function formatFrenchDate(date: Date) {
  const day = format(date, "d", { locale: fr });
  const month = format(date, "MMMM", { locale: fr });
  const year = format(date, "yyyy", { locale: fr });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  return `${day} ${capitalizedMonth} ${year}`;
}

interface DatePickerProps {
  onChange?: (date: Date | undefined) => void;
  value?: Date;
}

export function DatePicker({ onChange, value }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    onChange?.(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full justify-start text-left bg-secondary hover:bg-secondary font-normal text-slate-950",
            !date && "text-primary-foreground"
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {date ? formatFrenchDate(date) : <span>Choisir une date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={fr}
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
