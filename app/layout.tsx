import type { Metadata } from "next";
import "./_styles/globals.css";
import "./_styles/style.css";
import "./_styles/queries.css";
import { Vazirmatn } from "next/font/google";
import { prices, phone } from "./_lib/constants";
import Header from "./_ui/Header";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  // display: "swap",
});

const keywordsArray = [
  "سفارش کیک در قم",
  "سفارش شیرینی در قم",
  "کیک قم",
  "شیرینی قم",
  "سفارش آنلاین کیک",
  "سفارش آنلاین شیرینی",
  "کیک تولد قم",
  "مینی کیک قم",
  "شیرینی مجالس قم",
  "قیمت کیک در قم",
];

const keywordsString = keywordsArray.join(", ");

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "سفارش کیک، شیرینی و مینی‌کیک تازه در قم با قیمت مناسب | حاج علی",
  description: `سفارش کیک، شیرینی و مینی‌کیک تازه در قم. شیرینی خشک از ${prices.drySweet.toLocaleString()} تومان، شیرینی تر از ${prices.wetSweet.toLocaleString()} تومان، کیک از ${prices.cake.toLocaleString()} تومان. تماس: ${phone}`,
  keywords: keywordsString,
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="text-[50%] md:text-[56.25%] lg:text-[62.5%]"
    >
      <body className={`${vazirmatn.className} leading-4 text-[#555]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
