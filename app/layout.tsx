import '../styles/globals.css'

export const metadata = {
  title: 'dsbgeneralconstruction',
  description: 'Home improvement contractor',
}

type LayoutProps = {
  children: React.ReactNode
}
const RootLayout = ({ children }: LayoutProps) => {
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
