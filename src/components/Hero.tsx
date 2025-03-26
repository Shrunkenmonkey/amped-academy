import BackgroundImage from "@/components/BackgroundImage";
import { TEXT_STYLES } from "@/constants/styles";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: {
    src: string;
    webpSrc: string;
    alt: string;
  };
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  const defaultBackground = {
    src: "/images/backgrounds/lightning-background jpg.jpg",
    webpSrc: "/images/backgrounds/lightning-background webp.webp",
    alt: "Lightning background"
  };

  const bg = backgroundImage || defaultBackground;

  return (
    <section className="relative text-white py-8">
      <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
        <BackgroundImage 
          src={bg.src}
          webpSrc={bg.webpSrc}
          alt={bg.alt}
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={TEXT_STYLES.shadowHeavy}>
            {title}
          </h1>
          <p className="text-3xl md:text-4xl text-white" style={TEXT_STYLES.shadowMedium}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
} 