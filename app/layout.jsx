import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        
      </body>
      <Footer />
    </html>
  )
}
