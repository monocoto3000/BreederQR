import './globals.css'
import Nav from './Components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav/>
        </header>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
