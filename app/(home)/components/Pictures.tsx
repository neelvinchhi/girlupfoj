"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Pictures() {
  const images = [
    "/1.JPG",
    "/2.JPG", 
    "/3.JPG",
    "/4.JPG",
    "/5.JPG",
    "/6.JPG",
    "/7.JPG"
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-rose-50" id="pictures">
      <div className="container px-4 md:px-6 text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-rose-800">
          She for She x Ektara Events
        </h2>
        <p className="mt-4 text-lg text-rose-600 max-w-2xl mx-auto">
          Moments from our collaborative events and pad drive initiatives
        </p>
      </div>
      <div className="w-full flex justify-center">
        <Carousel className="w-full max-w-4xl p-5">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="relative h-[400px] md:h-[500px]">
                <img
                  src={src}
                  alt={`She for She x Ektara event ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-rose-600" />
          <CarouselNext className="text-rose-600" />
        </Carousel>
      </div>
    </section>
  );
}