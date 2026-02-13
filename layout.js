export const metadata = {
  title: 'Stratégie LAB Profile — NB NEXT STEP',
  description: 'Dashboard éditorial X + LinkedIn — Analyse LAB Profile de l\'Éducation Nationale',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0A0E1A" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0A0E1A' }}>
        {children}
      </body>
    </html>
  )
}
