export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TOOL TITLE</title>
        <meta name="description" content="TOOL DESCRIPTION" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475627763908800"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

