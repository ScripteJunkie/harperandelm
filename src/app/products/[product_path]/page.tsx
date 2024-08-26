"use client";
import NotFound from "@/app/404/page";
import Image from "next/image";

import { PRODUCTS } from "@/products";
import { useEffect, useState } from "react";
import CarouselDisplay from "@/components/Carousel";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { ProductDetails } from "@/lib/productTypes";
import Head from "next/head";

export default function Page({ params }: { params: { product_path: string } }) {
  if (
    !PRODUCTS["MEN"].find((product) => product.handle === params.product_path)
  ) {
    return <NotFound />;
  }

  return <Product params={params} />;
}

function Product({ params }: { params: { product_path: string } }) {
  const productDetails = PRODUCTS["MEN"].find(
    (product) => product.handle === params.product_path
  ) as ProductDetails;

  const productImages = productDetails.images;

  const [currVariant, setCurrVariant] = useState(productDetails.variants[0]);
  // const [currStyle, setCurrStyle] = useState();

  // useEffect(() => {
  //   setCurrStyle(Object.keys(productStyles)[0]);
  // }, [productStyles]);

  return (
    <main className="md:mx-auto max-sm:w-full max-w-7xl flex flex-col md:flex-row gap-4 p-4">
      <Head>
        <title>{productDetails.name}</title>
      </Head>
      <div className="flex-1">
        <CarouselDisplay images={productImages} />
      </div>
      <div className="lg:basis-[40%] max-lg:flex-1">
        <div>
          <h1 className="text-4xl font-semibold">{productDetails.name}</h1>
          <p className="text-lg font-medium">{`$${currVariant.price}`}</p>
        </div>
        <div className="flex flex-col justify-start">
          <Button
            className="mt-4 max-sm:w-full md:w-1/2 min-w-48"
            onClick={() => console.log("clicked")}
            variant="default"
          >
            Add to Cart
          </Button>
          <Button
            data-egift-title={productDetails.name}
            data-egift-price={currVariant.price}
            data-egift-image={productImages[0].src}
            className="w-fit px-2 gap-1 font-base hover:underline hover:bg-[unset]"
            onClick={() => (location.href = productImages[0].src)}
            variant="ghost"
          >
            {/* <Gift className="h-4 w-4" /> */}
            Send as eGift
            <QuestionMarkCircledIcon className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </main>
  );
}
