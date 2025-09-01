import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import './globals.css';

export const metadata: Metadata = {
  title: "MEMEverse",
  description: "Launch a playful, information-first single-page site that explains the memecoin, showcases tokenomics, and guides users on how to buy, with a friendly FAQ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' },
          ]}
          buttonText="Buy MEME"
          onButtonClick={() => { /* Add your click handler here */ }}
          className="fixed bottom-0 w-full"
        />
        {children}
      </body>
    </html>
  );
}