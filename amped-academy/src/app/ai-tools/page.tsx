import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Brain, Sparkles, Lightbulb, Music, Wand2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import BackgroundImage from "@/components/BackgroundImage";

export const metadata: Metadata = {
  title: "AI-Powered Music Tools | Amped Academy",
  description: "Enhance your music learning and creation with Amped Academy's cutting-edge AI tools for composition, practice, performance analysis, and more.",
  keywords: ["music AI tools", "AI composition tools", "AI music education", "machine learning in music", "AI-powered music practice"],
};

// Text shadow styles for glow effect
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

// Mock AI tools data - in a real application, this would come from a database or API
const aiTools = [
  {
    id: "tool-1",
    name: "Amped Composer",
    description: "AI-powered composition assistant that helps you create original music by suggesting melodies, harmonies, and chord progressions based on your style preferences.",
    features: [
      "Smart melody generator based on your input",
      "Chord progression suggestions",
      "Style-matching for various genres",
      "Export to MIDI or sheet music"
    ],
    icon: <Music className="h-6 w-6" />,
    image: "/images/ai-tool-1.jpg",
    comingSoon: false
  },
  {
    id: "tool-2",
    name: "Practice Analyzer",
    description: "Advanced audio analysis tool that listens to your practice sessions and provides real-time feedback on timing, pitch accuracy, and expression.",
    features: [
      "Real-time pitch and rhythm analysis",
      "Detailed performance metrics",
      "Personalized improvement suggestions",
      "Progress tracking over time"
    ],
    icon: <Zap className="h-6 w-6" />,
    image: "/images/ai-tool-2.jpg",
    comingSoon: false
  },
  {
    id: "tool-3",
    name: "Theory Helper",
    description: "Interactive music theory assistant that explains concepts in context and helps you understand the theory behind your favorite songs and compositions.",
    features: [
      "Song analysis and theory explanation",
      "Interactive lessons adapted to your level",
      "Visual aids for complex concepts",
      "Quiz and test functionality"
    ],
    icon: <Brain className="h-6 w-6" />,
    image: "/images/ai-tool-3.jpg",
    comingSoon: false
  },
  {
    id: "tool-4",
    name: "Arrangement Studio",
    description: "AI-powered arrangement tool that helps transform your basic ideas into fully arranged compositions with instrument selection and orchestration suggestions.",
    features: [
      "Intelligent orchestration suggestions",
      "Style-based arrangement templates",
      "Dynamic mixing presets",
      "Instrument role recommendation"
    ],
    icon: <Sparkles className="h-6 w-6" />,
    image: "/images/ai-tool-4.jpg",
    comingSoon: false
  },
  {
    id: "tool-5",
    name: "Lyrics Generator",
    description: "Creative AI assistant that helps you craft lyrics by suggesting phrases, rhymes, and themes based on your input and emotional direction.",
    features: [
      "Theme-based lyric suggestions",
      "Advanced rhyme patterns",
      "Emotional tone matching",
      "Structure templates for various song forms"
    ],
    icon: <Lightbulb className="h-6 w-6" />,
    image: "/images/ai-tool-5.jpg",
    comingSoon: true
  },
  {
    id: "tool-6",
    name: "Sound Designer",
    description: "Next-generation sound design tool that uses AI to create unique instrument sounds, textures, and effects based on your descriptions.",
    features: [
      "Text-to-sound generation",
      "Hybrid instrument creation",
      "Parameter exploration with AI guidance",
      "Export to popular plugin formats"
    ],
    icon: <Wand2 className="h-6 w-6" />,
    image: "/images/ai-tool-6.jpg",
    comingSoon: true
  }
];

// Use cases for semantic relevance in SEO
const useCases = [
  {
    title: "Music Composition",
    description: "Create original compositions faster with AI-assisted melodic and harmonic suggestions tailored to your style.",
    icon: <Music className="h-8 w-8 text-indigo-600" />
  },
  {
    title: "Practice Improvement",
    description: "Accelerate your skill development with AI analysis of your practice sessions and personalized improvement strategies.",
    icon: <Zap className="h-8 w-8 text-indigo-600" />
  },
  {
    title: "Music Education",
    description: "Learn music theory concepts more effectively with adaptive AI tools that adjust to your learning style and pace.",
    icon: <Brain className="h-8 w-8 text-indigo-600" />
  },
  {
    title: "Production",
    description: "Enhance your music production workflow with AI tools for arranging, mixing, and sound design.",
    icon: <Sparkles className="h-8 w-8 text-indigo-600" />
  }
];

// Hero Section
const HeroSection = () => (
  <section className="relative text-white py-8">
    <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
      <BackgroundImage 
        src="/images/backgrounds/lightning-background jpg.jpg"
        webpSrc="/images/backgrounds/lightning-background webp.webp"
        alt="Lightning background"
        priority={true}
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={TEXT_STYLES.shadowHeavy}>
          AI Music Tools
        </h1>
        <p className="text-3xl md:text-4xl text-white" style={TEXT_STYLES.shadowMedium}>
          Enhance Your Musical Journey with AI
        </p>
      </div>
    </div>
  </section>
);

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* AI Song Generator section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Song Generator</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Create unique songs powered by artificial intelligence</p>
          </div>
          
          <div className="flex flex-col items-center">
            <a href="https://www.leefretmap.com" target="_blank" rel="noopener noreferrer" className="block mb-8">
              <picture>
                <img 
                  src="/images/ai song generator image webp 400.webp" 
                  alt="AI Song Generator" 
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 max-w-full h-auto"
                  width={400}
                  height={400}
                />
              </picture>
            </a>
            <a 
              href="https://www.leefretmap.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-md font-medium text-lg inline-flex items-center gap-2 transition-colors duration-300"
            >
              <Music className="h-5 w-5" />
              Generate Your Song Now
            </a>
          </div>
        </div>
      </section>

      {/* Use cases - providing semantic relevance for SEO */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How AI Enhances Your Music</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our machine learning technology adapts to your unique musical style and learning needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg border border-gray-600 shadow-sm">
                <div className="w-12 h-12 mb-4 bg-gray-600 rounded-lg flex items-center justify-center text-blue-400">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI-Powered Music Tools</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how our artificial intelligence tools can transform your musical practice, composition, and learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool) => (
              <div key={tool.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-full">
                      <div className="text-blue-400">
                        {tool.icon}
                      </div>
                    </div>
                  </div>
                  {tool.comingSoon && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      COMING SOON
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{tool.name}</h3>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {!tool.comingSoon ? (
                    <Link href={`/ai-tools/${tool.id}`} className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
                      Try Now
                    </Link>
                  ) : (
                    <button className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-400 font-medium rounded-md cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section - additional semantic content for SEO */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How Our AI Technology Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our machine learning models are trained on vast datasets of music to provide intelligent assistance.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">Data Analysis</h3>
              <p className="text-gray-300">Our AI analyzes thousands of musical compositions across genres and time periods to learn patterns in melody, harmony, rhythm, and structure.</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">Adaptive Learning</h3>
              <p className="text-gray-300">As you use our tools, the AI learns your preferences, style, and skill level to provide increasingly personalized recommendations and feedback.</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">Real-time Processing</h3>
              <p className="text-gray-300">Our tools process audio and MIDI data in real-time, providing immediate feedback and suggestions as you practice, compose, or produce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials for E-E-A-T signals */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Join thousands of musicians who are transforming their practice with our AI tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold text-blue-400">
                  ML
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Michelle Lin</p>
                  <p className="text-sm text-gray-400">Professional Pianist & Recording Artist</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;The Practice Analyzer has transformed my rehearsal routine. The detailed feedback on my dynamics and articulation helped me prepare for my recent album recording with incredible precision.&quot;</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold text-blue-400">
                  TR
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Thomas Rodriguez</p>
                  <p className="text-sm text-gray-400">Music Producer & Sound Engineer</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;As a producer working with multiple artists, the Arrangement Studio has been a game-changer. It helps me quickly develop production ideas that complement each artist&apos;s unique style.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with structured data for featured snippets */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Learn more about our AI-powered music tools.</p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-700">
            <div className="py-6">
              <h3 className="text-xl font-semibold text-white">What is AI-assisted music composition?</h3>
              <p className="mt-2 text-gray-300">AI-assisted music composition uses machine learning algorithms to help musicians create original music by suggesting melodies, harmonies, chord progressions, and arrangements based on patterns learned from existing music and the user's own style preferences.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-white">Do I need advanced music theory knowledge to use these tools?</h3>
              <p className="mt-2 text-gray-300">No, our AI tools are designed for musicians at all levels. Beginners can use them to learn music theory concepts through practical application, while advanced musicians can leverage the tools to enhance their existing knowledge and creative process.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-white">Will AI make my music sound generic or unoriginal?</h3>
              <p className="mt-2 text-gray-300">Our AI tools are designed to enhance your creative process, not replace it. They provide suggestions and options based on your input and preferences, allowing you to maintain your unique voice while exploring new possibilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Music with AI?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">Join thousands of musicians who are already using our AI tools to enhance their learning, practice, and creative process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-md font-medium text-lg inline-block">
              Try AI Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 