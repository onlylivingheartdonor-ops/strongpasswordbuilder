export const metadata = {
  title: "Strong Password Builder | Keep Your Files and Information Safe",
  description: "Generate ultra-secure passwords in seconds. Customize length, symbols, and strength to keep your accounts safe from hackers.",
  
  alternates: {
    canonical: "https://www.strongpasswordbuilder.com",           // ← MUST CHANGE
  },

  openGraph: {
    title: "Strong Password Builder | Keep Your Files and Information Safe",
    description: "Generate ultra-secure passwords in seconds. Customize length, symbols, and strength to keep your accounts safe from hackers.",
    url: "https://www.strongpasswordbuilder.com",                 // ← MUST CHANGE
    siteName: "Moneywise Calculators",             // ← Change
    images: [
      {
        url: "https://www.strongpasswordbuilder.com/og-image.png", // ← MUST CHANGE
        width: 1200,
        height: 630,
        alt: "Strong Password Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strong Password Builder | Keep Your Files and Information Safe",
    description: "Generate ultra-secure passwords in seconds. Customize length, symbols, and strength to keep your accounts safe from hackers.",
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

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  authors: [{name: "David Graham" }],
  creator: "MoneyWise Calculators",
  publisher: "MoneyWise Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense */}
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
              name: "strongpasswordbuilder",
              description: "Financial calculator tool",
              url: "https://www.strongpasswordbuilder.com",
              applicationCategory: "Finance",
              operatingSystem: "All",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
            }),
          }}
        />
    </head>
      <body>{children}</body>
    </html>
  );
}
