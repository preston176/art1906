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
import ServicesSub from './components/Subdomains/RequestAQuote'
import AudioVisual from './components/Subdomains/AudioVisual'
import SeoDataAnalytics from './components/Subdomains/SeoDataAnalytics'
import ContentDevelopment from './components/Subdomains/ContentDevelopment'
import Contdevsub from './components/Subdomains/Contdevsub'
import CampaignStrategy from './components/Subdomains/CampaignStrategy'
import RequestAQuote from './components/Subdomains/RequestAQuote'
import SocialMediaMarketing from './components/Subdomains/SocialMediaMarketing'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      {/* Homepage */}
      <Route path='/' element={<>
      <Home />
   
      <Section1 />
      <Section2 />
      <Section3 />
      <LatestBlogs />
      <ContactUs />
      <StartConvo />
      <Footer />
    </>}></Route>
    {/* Subdomains */}
    <Route path='/requestaquote' element={<RequestAQuote />}></Route>
    <Route path='/socialmediamarketing' element={<SocialMediaMarketing />}></Route>
    <Route path="/audiovisual" element={<AudioVisual />}></Route>
    <Route path="/seodataanalytics" element={<SeoDataAnalytics />}></Route>
    <Route path="/contentdevelopment" element={<ContentDevelopment />}></Route>
    <Route path="/contentdevpricing" element={<Contdevsub />}></Route>
    <Route path="/campaignstrategy" element={<CampaignStrategy />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
