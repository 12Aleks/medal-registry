import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

interface PageProps{
 children: React.ReactNode
}

export default function SiteLayout({ children }: PageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">{children}</main>
      <Footer/>
    </div>
  )
}