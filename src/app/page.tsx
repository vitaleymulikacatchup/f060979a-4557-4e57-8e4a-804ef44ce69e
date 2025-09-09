"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase logoSrc="/images/logo.svg" logoAlt="MemePulse" leftButtonText="Menu" rightButtonText="Contact" onLeftButtonClick={() => {}} onRightButtonClick={() => {}} className="bg-transparent" containerClassName="flex justify-between items-center p-4 sticky top-0 z-50" buttonClassName="text-white" buttonBgClassName="bg-blue-600" />

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-pink-500 to-blue-500">
        <SplitHero title="Welcome to MemePulse" subtitle="Join the memecoin revolution!" primaryButtonText="Buy Now" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="What is MemePulse?" descriptions={["MemePulse is your next favorite memecoin, combining fun, community, and profit potential.", "Join us in making the memecoin space exciting and engaging!"]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy MemePulse" steps={[{ title: 'Step 1', description: 'Get a wallet that supports memecoins.', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Step 2', description: 'Purchase MemePulse on our exchange.', image: '/images/placeholder2.avif', position: 'center', isCenter: true }, { title: 'Step 3', description: 'Join our community on Discord and Twitter!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]} />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics title="MemePulse Tokenomics" description="Learn more about our token distribution and mechanics." kpiItems={[{ value: '$1M', description: 'Market Cap' }, { value: '1B', description: 'Total Supply' }, { value: '10%', description: 'Initial Burn' }]} />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ items={[{ title: 'What is a memecoin?', content: 'A memecoin is a cryptocurrency that was created as a joke or for fun, often based on internet memes.' }, { title: 'How can I buy MemePulse?', content: 'You can buy MemePulse through our partnered exchanges and wallets.' }, { title: 'Is there a mobile app for MemePulse?', content: 'Currently, we do not have a mobile app, but our website is mobile-friendly.' }, { title: 'How do I join the community?', content: 'You can join our Discord channel or follow us on Twitter for updates.' }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="MemePulse Logo" logoText="MemePulse" className="bg-transparent" containerClassName="flex justify-between items-center" />
      </div>
    </SiteThemeProvider>
  );
}