export const metadata = {
  title: "Strong Password Builder | Keep Your Files and Information Safe",
  description: "Generate ultra-secure passwords in seconds. Customize length, symbols, and strength to keep your accounts safe. Everything runs in your browser — nothing is sent to a server.",

  alternates: {
    canonical: "https://www.strongpasswordbuilder.com",
  },

  openGraph: {
    title: "Strong Password Builder | Keep Your Files and Information Safe",
    description: "Generate ultra-secure passwords in seconds. Customize length, symbols, and strength to keep your accounts safe. Everything runs in your browser — nothing is sent to a server.",
    url: "https://www.strongpasswordbuilder.com",
    siteName: "Strong Password Builder",
    images: [
      {
        url: "https://www.strongpasswordbuilder.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strong Password Builder -- Generate secure passwords instantly",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strong Password Builder | Keep Your Files and Information Safe",
    description: "Generate ultra-secure passwords in seconds. Customize length, symbols, and strength to keep your accounts safe.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  authors: [{ name: "David Graham" }],
  creator: "MoneyWise Calculators",
  publisher: "MoneyWise Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Strong Password Builder",
              description: "Free tool to generate cryptographically random passwords. Customize length and character types. Everything runs in your browser — nothing is sent to a server.",
              url: "https://www.strongpasswordbuilder.com",
              applicationCategory: "SecurityApplication",
              operatingSystem: "All",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              },
              author: {
                "@type": "Organization",
                name: "MoneyWise Calculators",
                url: "https://moneywisecalculator.com"
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
