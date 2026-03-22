import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { SWRConfig } from 'swr';

export const metadata: Metadata = {
  title: 'SoyInnovate Solutions | Enterprise Software for East Africa',
  description: 'Transform your dairy, cooperative, and manufacturing operations with our comprehensive ERP, MRP, and management platforms designed for East African businesses.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${manrope.className}`}
    >
      <body className="min-h-[100dvh]">
        <SWRConfig>
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
