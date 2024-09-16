"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

interface DualRangeSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  min?: number;
  max?: number;
  step?: number;
  unit?: string; 
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(({ className, value, defaultValue, onValueChange, unit = "", ...props }, ref) => {
  const [internalValues, setInternalValues] = React.useState(
    defaultValue || value || [0, 100]
  );

  React.useEffect(() => {
    if (value) {
      setInternalValues(value);
    }
  }, [value]);

  const handleValueChange = (newValues: number[]) => {
    setInternalValues(newValues);
    onValueChange?.(newValues);
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={internalValues}
      onValueChange={handleValueChange}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/20">
        <SliderPrimitive.Range className="absolute h-full bg-white" />
      </SliderPrimitive.Track>
      {internalValues.map((value, index) => (
        <React.Fragment key={index}>
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-white/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          <div
            className="absolute -top-6 text-xs flex items-center"
            style={{
              left: `calc(${
                ((value - (props.min || 0)) /
                  ((props.max || 100) - (props.min || 0))) *
                100
              }% - 0.5rem)`,
              whiteSpace: 'nowrap', 
            }}
          >
            <span>{value}</span>
            <span className="ml-1">{unit}</span>
          </div>
        </React.Fragment>
      ))}
    </SliderPrimitive.Root>
  );
});

DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
