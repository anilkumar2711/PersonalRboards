import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import "@/app/styles/globals.css";
import { ReduxProvider } from '@/providers/reduxprovider';
import { MixinProvider } from '@/providers/mixin.provider';
import { Roboto, Inter } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights you need (optional)
  variable: '--font-roboto', // Create a CSS variable for use in styles (optional)
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define a custom CSS variable (optional)
});

export const metadata = {
  title: 'RBoards',
  description: 'RBoards: Your Platform for Progress',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className+" "+inter.variable} >
      <head>
        <SEO title={metadata.title} description={metadata.description} />
      </head>
      <body >
        <ReduxProvider>
          <ThemeRegistry>
            <MixinProvider>
              <Layout>{children}</Layout>
            </MixinProvider>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
