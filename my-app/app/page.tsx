'use client';

import { MinimalistHero } from '@/components/MinimalistHero';

export default function Home() {
  return (
    <MinimalistHero
      logoText="SoniceMusic"
      navLinks={[
     
        { label: 'FEATURES', href: '#features' },
        { label: 'PRICING', href: '#pricing' },
        { label: 'ABOUT', href: '#about' },
      ]}
      mainText="Generate royalty-free music for your YouTube videos in seconds. Powered by AI, crafted for creators."
      getStartedLink="#features"
      imageSrc="https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"
      imageAlt="SoniceMusic AI music generation"
      overlayText={{
        part1: 'Create',
        part2: 'Your Music.',
      }}
    />
  );
}
