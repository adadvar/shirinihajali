import { prices } from "./constants";

const jsonLd = {
  "@context": "https://schema.org/",
  "@graph": [
    {
      "@type": "Product",
      name: "شیرینی خشک",
      image: "https://shirinihajali.ir/category/dry1.jpg",
      description: "انواع شیرینی خشک تازه قم",
      offers: {
        "@type": "Offer",
        priceCurrency: "IRR",
        price: prices.drySweet,
        availability: "https://schema.org/InStock",
        url: "https://shirinihajali.ir/dry",
      },
    },
    {
      "@type": "Product",
      name: "شیرینی تر",
      image: "https://shirinihajali.ir/category/wet1.jpg",
      description: "شیرینی تر تازه و خوشمزه قم",
      offers: {
        "@type": "Offer",
        priceCurrency: "IRR",
        price: prices.wetSweet,
        availability: "https://schema.org/InStock",
        url: "https://shirinihajali.ir/wet",
      },
    },
    {
      "@type": "Product",
      name: "کیک",
      image: "https://shirinihajali.ir/category/cake1.jpg",
      description: "انواع کیک تولد و مجالس در قم",
      offers: {
        "@type": "Offer",
        priceCurrency: "IRR",
        price: prices.cake,
        availability: "https://schema.org/InStock",
        url: "https://shirinihajali.ir/cake",
      },
    },
  ],
};

export const categories = [
  {
    href: "dry",
    src: "category/dry1.jpg",
    title: "شیرینی خشک",
    price: prices.drySweet,
  },
  {
    href: "wet",
    src: "category/wet1.jpg",
    title: "شیرینی تر",
    price: prices.wetSweet,
  },
  {
    href: "cake",
    src: "category/cake1.jpg",
    title: "انواع کیک",
    price: prices.cake,
  },
];
