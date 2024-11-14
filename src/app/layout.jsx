import * as React from 'react';
import ThemeRegistry from '../components/ThemeRegistry';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import "@/app/styles/globals.css";

export const metadata = {
  title: 'My Next.js App',
  description: 'A modern Next.js app with MUI, SEO, and global layout.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SEO title={metadata.title} description={metadata.description} />
      </head>
      <body >
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
