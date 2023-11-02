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
import SocialMediaMarketingPricing from './components/Subdomains/SocialMediaMarketingPricing'
import WebDevMaintenance from './components/Subdomains/WebDevMaintenance'
import WebsiteDevPricing from './components/Subdomains/WebsiteDevPricing'
import EventsDigitalMarketing from './components/Subdomains/EventsDigitalMarketing'
import CampaignStrategyPricing from './components/Subdomains/CampaignStrategyPricing'
import SeoDataAnalyticsSub from './components/Subdomains/SeoDataAnalyticsSub'
import MediaBuyingSub from './components/Subdomains/MediaBuyingSub'
import MediaBuyingPricing from './components/Subdomains/MediaBuyingPricing'
import NotFound from './components/NotFound'

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
    <Route path='/seodataanalytics' element={<SeoDataAnalyticsSub />}></Route>
    <Route path='/mediabuying' element={<MediaBuyingSub />}></Route>
    <Route path='/pricing/socialmediamarketing' element={<SocialMediaMarketingPricing />}></Route>
    <Route path='/pricing/websitedevelopmentmaintenance' element={<WebsiteDevPricing />}></Route>
    <Route path="/pricing/contentdevelopment" element={<Contdevsub />}></Route>
    <Route path="/pricing/seodataanalytics" element={<SeoDataAnalytics />}></Route>
    <Route path="/pricing/campaignstrategy" element={<CampaignStrategyPricing />}></Route>
    <Route path="/pricing/mediabuying" element={<MediaBuyingPricing />}></Route>
    <Route path="/audiovisual" element={<AudioVisual />}></Route>
    <Route path="/eventsdigitalmarketing" element={<EventsDigitalMarketing />}></Route>
    <Route path="/websitedevelopmentmaintenance" element={<WebDevMaintenance />}></Route>
    <Route path="/contentdevelopment" element={<ContentDevelopment />}></Route>
    <Route path="/campaignstrategy" element={<CampaignStrategy />}></Route>
    <Route path="/*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
