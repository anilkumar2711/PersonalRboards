import Head from 'next/head';

const SEO = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords || 'Next.js, MUI, SEO'} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

export default SEO;
