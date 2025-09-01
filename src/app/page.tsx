"use client";
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to MEMEverse"
          subtitle="Launch your memecoin journey here"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="Join the MEMEverse Community"
          descriptions={[
            "Explore the playful world of memecoins.",
            "Engage with our vibrant community and have fun!",
            "Start trading today!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="MEME Tokenomics"
          description="Discover the metrics behind MEME."
          kpiItems={[
            { value: '1B', description: 'Total Supply', longDescription: 'The total supply of MEME tokens available.', icon: 'LucideIcon' },
            { value: '250M', description: 'Circulating Supply', longDescription: 'The circulating tokens currently in the market.', icon: 'LucideIcon' },
            { value: '60%', description: 'Community Alloc', longDescription: 'Funds allocated to the community and marketing.', icon: 'LucideIcon' }
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ
          items={[
            { title: "What is MEMEverse?", content: "A curious community-driven memecoin." },
            { title: "How do I buy MEME?", content: "You can buy MEME through various exchanges." },
            { title: "What are the risks?", content: "Investing in memecoins can be volatile." },
            { title: "How can I get involved?", content: "Join our community on social media!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        {/* Footer content or component will go here */}
      </div>
    </SiteThemeProvider>
  );
}