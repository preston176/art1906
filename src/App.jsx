import { Container } from 'react-bootstrap'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import LatestBlogs from './components/LatestBlogs'
import ContactUs from './components/ContactUs'

function App() {
  

  return (
    <>
    <Container>

      <Navbar />
      </Container>
      <Home />
      <Section1 />
      <Section2 />
      <Section3 />
      <LatestBlogs />
      <ContactUs />
    </>
  )
}

export default App
