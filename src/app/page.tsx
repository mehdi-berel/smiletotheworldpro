import type { Metadata } from 'next';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import CallToAction from './components/home/CallToAction';
import ProblemSolution from './components/home/ProblemSolution';
import Stats from './components/home/Stats';

export const metadata: Metadata = {
  title: 'SmileToTheWorldPro | Modern Dental Solutions',
  description: 'Discover our comprehensive dental services and state-of-the-art laboratory. We combine expertise with cutting-edge technology for exceptional dental care.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
