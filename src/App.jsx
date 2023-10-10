import { Container } from 'react-bootstrap'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import LatestBlogs from './components/LatestBlogs'
import ContactUs from './components/ContactUs'
import StartConvo from './components/StartConvo'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Home />
   
      <Section1 />
      <Section2 />
      <Section3 />
      <LatestBlogs />
      <ContactUs />
      <StartConvo />
      <Footer />
    </>
  )
}

export default App
