import { Metadata } from "next";
import Link from "next/link";
import { Star, CheckCircle } from 'lucide-react';
import BackgroundImage from "@/components/BackgroundImage";

export const metadata: Metadata = {
  title: "Amped Academy Visual Guitar Learning System lee fretmap",
  description: "Master the guitar fretboard fast with our color-coded stickers! Perfect for visual learners, beginners of all levels. Durable, easy to apply, and proven to accelerate learning. Shop now!",
};

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Beginner Guitarist",
    content: "These stickers were a game changer for me! As a visual learner, I was struggling with traditional methods, but the color-coding made everything click. I'm playing songs after just a few weeks!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Self-Taught Musician",
    content: "I was skeptical at first, but these stickers helped me make connections I was missing. The colors make music theory much more intuitive. My progress has accelerated dramatically!",
    rating: 5,
  },
  {
    id: 3,
    name: "John Lewis",
    role: "Guitar enthusiast",
    content: "Learning music theory took my guitar playing to the next level. It helped me break through the intermediate hump, and now I can improvise with ease. I feel more confident and free when I play!",
    rating: 5,
  },
];

// Benefits data
const benefits = [
  {
    title: "Instant Gratification",
    description: "Play recognizable riffs in your first session, fueling your motivation.",
  },
  {
    title: "Perfect for Self-Teaching",
    description: "Clear visual cues eliminate confusion when learning independently.",
  },
  {
    title: "Social Media Ready",
    description: "Master the skills to create shareable content and connect with other musicians.",
  },
  {
    title: "Complements Online Tutorials",
    description: "Enhance YouTube lessons by applying what you learn effectively.",
  },
];

// Common styles
const sectionStyles = "py-6 bg-gray-900";
const containerStyles = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const cardStyles = "bg-gray-800 p-6 rounded-2xl shadow-md";
const headingStyles = "text-2xl font-bold text-white mb-4 text-center";
const textShadowHeavy = { 
  textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
};
const textShadowMedium = { 
  textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
};

// Section components for better organization
const HeroSection = () => (
  <section className="relative text-white py-12">
    <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
      <BackgroundImage 
        src="/images/backgrounds/lightning-background-jpg.jpg"
        webpSrc="/images/backgrounds/lightning-background-webp.webp"
        alt="Lightning background"
        priority={true}
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-20">
        <h1 className="text-7xl md:text-9xl font-bold mb-4 text-white" style={textShadowHeavy}>
          Amped Academy
        </h1>
        <p className="text-3xl md:text-4xl text-white" style={textShadowMedium}>
          The visual approach to guitar mastery
        </p>
      </div>
    </div>
  </section>
);

const ResultsSection = () => (
  <section className={sectionStyles}>
    <div className={containerStyles}>
      <div className={`${cardStyles} text-center mb-6`}>
        <h2 className="text-3xl font-bold text-white">Real Results For Beginner Guitarists Of All Levels</h2>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
          Our students typically progress 3x faster than with traditional methods alone. The color-coded system bridges the gap between watching tutorials and truly understanding what you're playing, turning "how did they do that?" moments into "I can totally do this!" By providing a clear visual framework, our stickers help you overcome obstacles and achieve your musical goals faster.
        </p>
      </div>
    </div>
  </section>
);

const ProblemSolutionSection = () => (
  <section className={sectionStyles}>
    <div className={containerStyles}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${cardStyles} h-full`}>
          <h2 className={headingStyles}>Are You Struggling to Learn Guitar?</h2>
          <p className="text-gray-300 text-center">
            Is the guitar fretboard a mystery to you? Do traditional guitar lessons feel slow and confusing? Our color-coded fretboard stickers are the solution! These precision-engineered, laminated stickers transform your guitar learning experience by providing a visual roadmap that makes immediate sense. This intuitive system helps you master the guitar fretboard faster and more effectively, letting you focus on what truly matters: creating music.
          </p>
        </div>

        <div className={`${cardStyles} h-full`}>
          <h2 className={headingStyles}>Why Visual Learning is a Game-Changer for Guitarists</h2>
          <p className="text-gray-300 text-center">
            Studies demonstrate that visualizing during practice creates the same neural pathways as physical practice. Our color system leverages this "Visual Motor Rehearsal" technique, used by pro musicians and athletes. By visualizing patterns, you master them more efficiently. Research indicates that visual learners can improve their retention and recall of musical concepts by up to 30% compared to traditional methods.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const VisualLearningSection = () => (
  <section className={sectionStyles}>
    <div className={containerStyles}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${cardStyles} h-full`}>
          <h2 className={headingStyles}>Level Up Your Guitar Skills & Ditch the Frustration</h2>
          <p className="text-gray-300 text-center">
            Traditional guitar learning can be frustratingly slow. Our revolutionary color-coded system makes mastering the fretboard intuitive and straightforward, especially for visual learners. Whether you're aiming to play trending TikTok covers or compose your own viral hits, our stickers provide the essential foundation for your musical journey. By simplifying complex music theory into visual patterns, you'll progress rapidly and enjoy the process immensely.
          </p>
        </div>

        <div className={`${cardStyles} h-full`}>
          <h2 className={headingStyles}>Designed for the Modern Guitar Learner</h2>
          <p className="text-gray-300 mb-2 text-center">Forget outdated methods!</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  <strong className="text-white">{benefit.title}:</strong> {benefit.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className={sectionStyles}>
    <div className={containerStyles}>
      <div className={cardStyles}>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Transform Your Guitar Learning Experience</h2>
        <div className="prose prose-lg text-gray-300 prose-headings:text-white prose-strong:text-white">
          <p className="text-center">
            Our color-coded stickers provide an intuitive visual framework that makes learning guitar easier and more enjoyable. Whether you're a complete beginner or looking to improve your skills, our system will help you progress faster and with greater confidence.
          </p>
          <p className="mt-4 text-center">
            By making complex musical concepts visible and tangible, you'll develop a deeper understanding of the fretboard and unlock your full potential as a guitarist.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className={sectionStyles}>
    <div className={containerStyles}>
      <h2 className="text-3xl font-bold text-white text-center mb-6">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={`${cardStyles} hover:shadow-lg transition duration-300`}>
            <div className="flex text-yellow-400 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-6">&quot;{testimonial.content}&quot;</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-900 rounded-full mr-4"></div>
              <div>
                <h4 className="font-medium text-white">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 relative bg-gray-900">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Started on Your Guitar Journey Today!</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300 text-center">
          Transform your guitar learning with our premium color-coded fretboard stickers. Don&apos;t settle for ordinary stickers that fade or peel. Our stickers maintain their vibrant colors and precision placement for months of learning. Don&apos;t miss this opportunity to revolutionize your learning experience.
        </p>
        <p className="text-xl font-bold mb-8 text-gray-300 text-center">
          Ready to visualize your way to guitar mastery? Order your color-coded fretboard roadmap now and experience the difference that visual learning makes!
        </p>
        <div className="mb-8 text-center">
          <p className="italic text-lg text-gray-300">Your fingers will thank you. Your followers will be impressed.</p>
        </div>
        <div className="text-center">
          <Link 
            href="/shop" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <HeroSection />
      <ResultsSection />
      <ProblemSolutionSection />
      <VisualLearningSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
