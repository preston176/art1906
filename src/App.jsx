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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ServicesSub from './components/Subdomains/ServicesSub'
import AudioVisual from './components/Subdomains/AudioVisual'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<>
      <Home />
   
      <Section1 />
      <Section2 />
      <Section3 />
      <LatestBlogs />
      <ContactUs />
      <StartConvo />
      <Footer />
    </>}></Route>,
    <Route path='/services' element={<ServicesSub />}></Route>
    <Route path="/audiovisual" element={<AudioVisual />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
