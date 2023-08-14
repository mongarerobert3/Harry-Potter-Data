import './globals.css'

import {NotFoundPage, Title} from '../components'

export const metadata = {
  title: 'Harry potter',
  description: 'Harry Potter Api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='app'>
        <main>
          <Title />
          {children}
        </main> 
      </body>
    </html>
  )
}
