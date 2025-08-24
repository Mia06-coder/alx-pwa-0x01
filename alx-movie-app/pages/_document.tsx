import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />

        <link rel="icon" href="/favicon.ico" />

        {/* SEO / Social Previews */}
        <meta name="description" content="A modern PWA built with Next.js" />
        <meta property="og:title" content="MyApp" />
        <meta
          property="og:description"
          content="A modern PWA built with Next.js"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        <meta property="og:url" content="https://myapp.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MyApp" />
        <meta
          name="twitter:description"
          content="A modern PWA built with Next.js"
        />
        <meta name="twitter:image" content="/icons/icon-512x512.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
