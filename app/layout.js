
import { Providers } from "@/app/providers/provider.js"
import './globals.css'



export const metadata = {
  title: 'Catálogo Pymes',
  description: '',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
