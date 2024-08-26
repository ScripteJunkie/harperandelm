import { ProductDetails } from "./lib/productTypes";

export const PRODUCTS: Record<string, ProductDetails[]> = {
  MEN: [
    {
      id: 12345,
      handle: "mens-fleece-bomber-jacket-black",
      name: "Fleece Bomber Jacket",
      displayName: "Black Fleece Bomber Jacket",
      description: "A black zip up front hoodie",
      audience: "MEN",
      category: "JACKET",
      available: true,
      tags: [],
      variants: [
        {
          id: 54321,
          name: "Fleece Bomber Jacket - Black - S",
          title: "S",
          price: 59.99,
          sku: "M1-BJ-BL-S",
          available: true,
        },
        {
          id: 54322,
          name: "Fleece Bomber Jacket - Black - M",
          title: "M",
          price: 59.99,
          sku: "M1-BJ-BL-M",
          available: true,
        },
        {
          id: 54323,
          name: "Fleece Bomber Jacket - Black - L",
          title: "L",
          price: 59.99,
          sku: "M1-BJ-BL-L",
          available: true,
        },
        {
          id: 54324,
          name: "Fleece Bomber Jacket - Black - XL",
          title: "XL",
          price: 59.99,
          sku: "M1-BJ-BL-XL",
          available: true,
        },
        {
          id: 54325,
          name: "Fleece Bomber Jacket - Black - XXL",
          title: "XXL",
          price: 59.99,
          sku: "M1-BJ-BL-XXL",
          available: true,
        },
      ],

      images: [
        {
          title: "Black Fleece Bomber",
          alt: "Black Fleece Bomber",
          src: "/zipup/BlackZipUpFront.png",
        },
        {
          title: "Black Fleece Bomber",
          alt: "Black Fleece Bomber",
          src: "/zipup/BlackZipUpBehind.png",
        },
      ],
    },
    {
      id: 12345,
      handle: "mens-fleece-bomber-jacket-navy",
      name: "Fleece Bomber Jacket",
      displayName: "Navy Fleece Bomber Jacket",
      description: "A navy zip up front hoodie",
      audience: "MEN",
      category: "JACKET",
      available: true,
      tags: [],
      variants: [
        {
          id: 54321,
          name: "Fleece Bomber Jacket - Navy - S",
          title: "S",
          price: 59.99,
          sku: "M1-BJ-BL-S",
          available: true,
        },
        {
          id: 54322,
          name: "Fleece Bomber Jacket - Navy - M",
          title: "M",
          price: 59.99,
          sku: "M1-BJ-BL-M",
          available: true,
        },
        {
          id: 54323,
          name: "Fleece Bomber Jacket - Navy - L",
          title: "L",
          price: 59.99,
          sku: "M1-BJ-BL-L",
          available: true,
        },
        {
          id: 54324,
          name: "Fleece Bomber Jacket - Navy - XL",
          title: "XL",
          price: 59.99,
          sku: "M1-BJ-BL-XL",
          available: true,
        },
        {
          id: 54325,
          name: "Fleece Bomber Jacket - Navy - XXL",
          title: "XXL",
          price: 59.99,
          sku: "M1-BJ-BL-XXL",
          available: true,
        },
      ],
      images: [
        {
          title: "Navy Fleece Bomber",
          alt: "Navy Fleece Bomber",
          src: "/zipup/NavyZipUpFront.png",
        },
        {
          title: "Navy Fleece Bomber",
          alt: "Navy Fleece Bomber",
          src: "/zipup/NavyZipUpBehind.png",
        },
      ],
    },
  ],
};

//   "mens-crew": {
//     name: "Classic Crew Tee",
//     sku: 54321,
//     description: "A classic crew tee",
//     audience: "MEN",
//     category: "SHIRT",
//     styles: {
//       HEATHER: {
//         name: "Heather",
//         images: [],
//       },
//     },
//   },
// };
