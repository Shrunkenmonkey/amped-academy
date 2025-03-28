import Link from 'next/link';
import Image from 'next/image';
import { Music, Mic, Guitar, Wand2, Brain, Sparkles, Zap, LineChart, Lightbulb, Code2, Bot, Cpu, Database, Network, LineChart as LineChartIcon } from "lucide-react";
import Hero from '@/components/Hero';
import { SECTION_STYLES, BUTTON_STYLES } from '@/constants/styles';

// Text shadow styles for glow effect
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  },
  shadowLight: { 
    textShadow: "0 0 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.7)"
  }
};

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
  }
];

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero 
        title="AI Music Tools"
        subtitle="Enhance Your Musical Journey with AI"
      />

      {/* Clickable Image Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="https://www.leefretmap.com" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full max-w-[400px] mx-auto">
              <Image
                src="/images/ai-song-generator-image-webp-400.webp"
                alt="AI Song Generator"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </Link>
          <div className="text-center mt-6">
            <Link 
              href="https://www.leefretmap.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200"
            >
              Try it Free
            </Link>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className={`${SECTION_STYLES.section} bg-gray-800`}>
        <div className={SECTION_STYLES.container}>
          <div className="text-center mb-12">
            <h2 className={SECTION_STYLES.heading}>How Our AI Technology Works</h2>
            <p className={SECTION_STYLES.subheading}>Our machine learning models are trained on vast datasets of music to provide intelligent assistance.</p>
          </div>

          <div className={SECTION_STYLES.grid}>
            <div className={SECTION_STYLES.card}>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">Data Analysis</h3>
              <p className="text-gray-300">Our AI analyzes thousands of musical compositions across genres and time periods to learn patterns in melody, harmony, rhythm, and structure.</p>
            </div>
            
            <div className={SECTION_STYLES.card}>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">Adaptive Learning</h3>
              <p className="text-gray-300">As you use our tools, the AI learns your preferences, style, and skill level to provide increasingly personalized recommendations and feedback.</p>
            </div>
            
            <div className={SECTION_STYLES.card}>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">Real-time Processing</h3>
              <p className="text-gray-300">Our tools process audio and MIDI data in real-time, providing immediate feedback and suggestions as you practice, compose, or produce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className={SECTION_STYLES.section}>
        <div className={SECTION_STYLES.container}>
          <div className="text-center mb-12">
            <h2 className={SECTION_STYLES.heading}>What Our Users Say</h2>
            <p className={SECTION_STYLES.subheading}>Join thousands of musicians who are transforming their practice with our AI tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={SECTION_STYLES.card}>
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

            <div className={SECTION_STYLES.card}>
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

      {/* FAQ Section */}
      <section className={`${SECTION_STYLES.section} bg-gray-800`}>
        <div className={SECTION_STYLES.container}>
          <div className="text-center mb-12">
            <h2 className={SECTION_STYLES.heading}>Frequently Asked Questions</h2>
            <p className={SECTION_STYLES.subheading}>Learn more about our AI-powered music tools.</p>
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
    </div>
  );
} 