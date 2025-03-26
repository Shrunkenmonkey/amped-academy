import { memo } from 'react';
import BackgroundImage from "./BackgroundImage";
import { IMAGES } from '@/constants/images';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundSrc?: string;
  webpBackgroundSrc?: string;
  children?: React.ReactNode;
  minHeight?: string;
  backgroundAlt?: string;
  overlayOpacity?: number;
  backgroundQuality?: number;
  className?: string;
}

function PageHero({
  title,
  subtitle,
  backgroundSrc = IMAGES.backgrounds.lightning.jpg,
  webpBackgroundSrc = IMAGES.backgrounds.lightning.webp,
  children,
  minHeight = "200px",
  backgroundAlt = "Background image",
  overlayOpacity = 25,
  backgroundQuality = 80,
  className = ""
}: PageHeroProps) {
  return (
    <section className={`relative text-white ${className}`}>
      {/* Background Image with Fallback Color */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
        <BackgroundImage 
          src={backgroundSrc}
          webpSrc={webpBackgroundSrc}
          alt={backgroundAlt}
          priority={true}
        />
        {/* Dark overlay to reduce brightness */}
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity / 100 }}
        />
      </div>
      
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" 
        style={{ minHeight }}
      >
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

export default memo(PageHero); 