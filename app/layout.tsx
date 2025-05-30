// Remove any search-related imports

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Remove PayPal provider wrapper if present */}
        {children}
      </body>
    </html>
  )
}