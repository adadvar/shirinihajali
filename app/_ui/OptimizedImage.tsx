import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  isHero?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 80,
  sizes = "100vw",
  isHero = false,
}: OptimizedImageProps) {
  const base64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8XyhfDwAFVgHg6j8D1wAAAABJRU5ErkJggg==";
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "16/16" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority || isHero}
        quality={quality}
        sizes={sizes}
        blurDataURL={base64}
        placeholder="blur"
        className={`object-cover  ${className}`}
      />
    </div>
  );
}
