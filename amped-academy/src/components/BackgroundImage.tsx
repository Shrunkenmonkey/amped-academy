"use client";

import Image from "next/image";
import { useState, useEffect, memo } from "react";

interface BackgroundImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  opacity?: number;
  quality?: number;
  objectFit?: "cover" | "contain" | "fill" | "none";
  webpSrc?: string;
}

function BackgroundImageComponent({ 
  src, 
  alt, 
  priority = false, 
  opacity = 100,
  quality = 85,
  objectFit = "cover",
  webpSrc
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src, webpSrc]);

  // Use webpSrc if provided, otherwise fallback to src
  const imageSrc = webpSrc || src;

  return (
    <div className="h-full w-full relative">
      {!hasError && (
        <>
          {webpSrc && (
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              <Image 
                src={src}
                alt={alt}
                fill
                priority={priority}
                quality={quality}
                className={`object-${objectFit} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ opacity: opacity / 100 }}
                onError={() => setHasError(true)}
                onLoad={() => setIsLoaded(true)}
                sizes="100vw"
                loading={priority ? "eager" : "lazy"}
              />
            </picture>
          )}
          {!webpSrc && (
            <Image 
              src={imageSrc}
              alt={alt}
              fill
              priority={priority}
              quality={quality}
              className={`object-${objectFit} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ opacity: opacity / 100 }}
              onError={() => setHasError(true)}
              onLoad={() => setIsLoaded(true)}
              sizes="100vw"
              loading={priority ? "eager" : "lazy"}
            />
          )}
        </>
      )}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
}

export default memo(BackgroundImageComponent); 