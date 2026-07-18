import Navbar from './Navbar'
import Footer from './Footer'
import SkipLink from './SkipLink'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
