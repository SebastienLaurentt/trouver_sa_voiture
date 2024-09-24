"use client";
import { EditVehicleFormData } from "@/lib/schema";
import { TouchEvent, useEffect, useRef, useState } from "react";
import CarCard from "./CarCard";

const Carrousel = ({
  vehicles,
  isPremium = false,
}: {
  vehicles: EditVehicleFormData[];
  isPremium?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentIndex(0); // Reset index on resize
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.ceil(vehicles.length / cardsPerView()) - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const cardsPerView = () => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768) return 1;
    return 1; // Default for mobile
  };

  useEffect(() => {
    if (trackRef.current && windowWidth < 1280) {
      const cardsInView = cardsPerView();
      const totalCards = vehicles.length;
      const cardWidth = 100 / totalCards;
      const offset = currentIndex * cardWidth * cardsInView;
      trackRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex, vehicles.length, windowWidth]);

  if (windowWidth >= 1280) {
    // xl breakpoint: show all 3 cards without carousel
    return (
      <div className="my-8 grid grid-cols-3 gap-4">
        {vehicles.slice(0, 3).map((vehicle, index) => (
          <CarCard
            key={index}
            id={vehicle.id}
            src={`https://aotdlnddxemcekzntizx.supabase.co/storage/v1/object/public/images/${vehicle.imageUrl}`}
            price={vehicle.price}
            boiteType={vehicle.boiteType}
            carType={vehicle.carType}
            kmNumber={vehicle.kmNumber}
            name={vehicle.name}
            sold={vehicle.sold}
            tag={vehicle.tag || ""}
            premium={vehicle.premium}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="my-8 w-full overflow-hidden">
      {/* Track for the car cards */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-300 ease-out"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ width: `${vehicles.length * 100}%` }}
      >
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className={`flex-none px-2`}
            style={{ width: `${100 / vehicles.length}%` }}
          >
            <div className="flex justify-center">
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
                premium={vehicle.premium}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bullet pagination */}
      {windowWidth < 1280 && (
        <div className="inset-x-0 mt-4 flex justify-center space-x-4">
          {Array.from({
            length: Math.ceil(vehicles.length / cardsPerView()),
          }).map((_, index) => (
            <button
              key={index}
              className={`size-1.5 rounded-full ${
                currentIndex === index
                  ? isPremium
                    ? "bg-tertiary"
                    : "bg-primary"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
