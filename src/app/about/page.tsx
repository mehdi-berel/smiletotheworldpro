import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import AboutStory from '@/app/components/about/AboutStory';
import AboutTeam from '@/app/components/about/AboutTeam';
import AboutWhy from '@/app/components/about/AboutWhy';

export const metadata: Metadata = {
  title: 'About Us - SmileToTheWorld Pro',
  description: 'Learn about our mission, values, team, and how we\'re transforming the dental industry with innovative solutions.',
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutWhy />
    </main>
  );
}
