import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Hobbies from './components/Hobbies.jsx'
import Music from './components/Music.jsx'
import ThankYou from './components/ThankYou.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Hobbies />
        <Music />
        <ThankYou />
      </main>
      <Footer />
    </>
  )
}
