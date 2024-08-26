"use client";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/imageCarousel";
import { PRODUCTS } from "@/products";
import { ProductImage } from "@/lib/productTypes";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { createRef, useRef, useState } from "react";

export default function CarouselDisplay({
  images,
}: {
  images: ProductImage[];
}) {
  //   const props = useCarousel();
  const [currentImage, setCurrentImage] = useState(-1);

  return (
    <div className="flex flex-row max-lg:flex-col-reverse gap-4">
      <div className="max-sm:hidden flex flex-col max-lg:flex-row lg:max-w-32 justify-start gap-4">
        {images.map((image, i) => (
          <div
            key={image.src + "-thumb"}
            className={cn(
              "p-px",
              currentImage == i ? "ring-1 ring-black" : null
            )}
          >
            <Image alt={image.alt} src={image.src} width={80} height={100} />
          </div>
        ))}
      </div>
      <Carousel className="w-full" draggable={false}>
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={image.src + i + "-full"}>
              <Image
                alt={image.alt}
                src={image.src}
                width={640}
                height={800}
                className="mx-auto"
              />
              {/* <Image alt={image.alt} src={image.src} width={480} height={600} /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious id="carousel-prev" />
        <CarouselNext id="carousel-next" />
      </Carousel>
    </div>
  );
}
