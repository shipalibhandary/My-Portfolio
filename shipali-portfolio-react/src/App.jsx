import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showSplash && (
        <div id="splash-screen">
          <div className="splash-content">
            <img src="/images/coverPage.jpg" alt="Cover Page"></img>
          </div>
        </div>
      )}

      <Navbar />
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
