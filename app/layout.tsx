import '@styles/globals.css'

export const metadata = {
  title: 'dsbgeneralconstruction',
  description: 'Home improvement contractor',
}

const RootLayout = () => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
