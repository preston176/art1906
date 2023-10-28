import React from 'react'
import "./SeoDataAnalyticsSub.css"
import LatestBlogs from '../LatestBlogs'
import Footer from '../Footer'

function SeoDataAnalyticsSub() {
  return (
    <div>
        <div className="nav smm">
    <div className="l__side">
      Art <span>1906</span>_ <br />Creative Shops
    </div>
    <div className="r__side"><ul>
      <li>Services</li>
      <li>Pricing</li>
      <li>Resources</li>
      <li>Contact</li>
      <li>Meet the Team</li>
    </ul></div>
  </div>
  
  <div className="heading__container">
    <img src="/smm.png" alt="" />
    <h3>SEO and Data Analytics</h3>
  </div>
  <p className='cont__text'>
  According to recent studies, over 90% of all online experiences begin with a search query. Search Engine Optimization (SEO) is the process of optimizing a website to rank higher in search engine results pages (SERPs). 
  </p>
  <div className="section__container">
    <div className="section">
        <div className="img"><img src="/ind_research.png" alt="" /></div>
        <div className="section__desc">
            <h5>Traffic Analysis & Review</h5>
        <p>Our team meticulously evaluates your website's traffic, assessing its value and identifying opportunities for enhancement. We analyze key metrics such as time spent on site and conversions to gain insights into user behavior and improve your website's performance.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/social_media_strategy.png" alt="" /></div>
        <div className="section__desc">
            <h5>Website Technical Audit</h5>
        <p>Our team provides a thorough evaluation of your website's technical components to identify areas that need improvement. Our primary focus is on optimizing loading speed, fixing broken links, ensuring mobile-friendliness, and other crucial elements.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/inbound_marketing.png" alt="" /></div>
        <div className="section__desc">
            <h5>Keyword Research, Mapping & Reporting</h5>
        <p>Keyword Research and Optimization: Driving Relevant Traffic to Your Website
Our team conducts in-depth research to identify the most effective keywords for your target audience. We strategically map these keywords to ensure that searchers can find the most relevant information on your website. We monitor keyword performance and provide regular progress reports to track the success of our optimization efforts.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/cost_effective_marketing.png" alt="" /></div>
        <div className="section__desc">
            <h5>Off-Page Optimization & Brand Reputation Management</h5>
        <p>Our comprehensive off-page optimization services ensure an impeccable online presence. We monitor and manage your business directory listings, and optimize your Google My Business listing, which includes initial setup if needed.</p>
        </div>
    </div>
    <div className="section">
        <div className="img"><img src="/increased_marketing_and_conversions.png" alt="" /></div>
        <div className="section__desc">
            <h5>Content Marketing</h5>
        <p>Our team specializes in creating custom content marketing strategies that cater to your business objectives. We'll develop captivating and informative materials, including blog posts, articles, infographics, and videos, that appeal to your intended audience. This will not only help increase organic traffic but establish your business's credibility as a thought leader in your industry.</p>
        </div>
    </div>
    <div className="section">
        <div className="img"><img src="/increased_marketing_and_conversions.png" alt="" /></div>
        <div className="section__desc">
            <h5>Regular Reporting</h5>
        <p>We take transparency and accountability very seriously. For this reason, we provide you with detailed quarterly reports that outline the actions taken, progress made, and metrics that track the results achieved. These reports offer valuable insights into the performance of your digital marketing efforts and serve as a foundation for data-driven decision-making.</p>
        </div>
    </div>
  </div>

  {/* why you should choose  */}
  <div className="why__smm">
    <p>We employ various white-hat SEO techniques to ensure the ethical and effective optimization of websites. </p>
    <p>Some of the techniques we use include:
</p>
<h6>On-page SEO</h6>
    <p className='parag'>This focuses on improving the technical aspects of your website, such as website speed, mobile-friendliness, URL structure, site architecture, and crawlability for search engine bots.
</p>
<h6>Technical SEO</h6>
    <p className='parag'>Our team is skilled in media buying and targeted advertising on a variety of social media platforms. We also regularly monitor digital marketing results throughout and after campaigns. By utilizing data from in-platform analytics and third-party tools, we can optimize your social media marketing campaign for optimal performance. This approach ensures you get the most value from your advertising budget by providing a wealth of business intelligence data, including metrics like impressions, average conversion rates, post and campaign reach, and other specified filters.

</p>
<h6>Local SEO</h6>
    <p className='parag'>If your business targets a specific local area, we can help you optimize your website for local search results. This includes creating and optimizing local business listings, obtaining customer reviews, and implementing location-specific keywords.</p>
<h6>Product SEO</h6>
    <p className='parag'>For e-commerce websites, we specialize in optimizing product pages to improve their visibility in SERPs. This includes optimizing headlines, product descriptions, meta data, internal linking, and navigational structure for better search and user experience.
</p>
<div className="in__addition">
    <h6>In addition to these techniques, our SEO services and projects include:</h6>
    <ul>
        <li>Competitor research and analysis to understand your competitive landscape.</li>
        <li>Page redesign to improve the overall user experience and engagement.</li>
        <li>Contextual marketing to align your content with the interests and needs of your target audience.</li>
        <li>Website page-load speed optimization for better user experience and search engine rankings.</li>
        <li>Adaptability on all screens and displays to ensure your website is mobile-friendly.</li>
        <li>Keywords research to identify the most relevant and valuable keywords for your business.</li>
        <li>Page interlinking to improve website navigation and search engine crawling.</li>
        <li>Meta data optimization to create informative and compelling meta titles and descriptions.</li>
        <li>Schema optimization to enhance the visibility of your website in search results.</li>
        <li>Image compression to optimize image sizes without compromising quality.</li>
        <li>Analytics Integration to track and measure the performance of your website.</li>
        <li>Custom enquiry forms to facilitate easy communication between you and your website visitors.</li>
        <li>Page caches and code minification to improve website speed and performance.</li>
        <li>Website security measures to protect your website and user data.</li>
        <li>Website content and copyrighting to ensure your content is informative, engaging, and optimized for search engines.</li>
        <li>Maps integration to display your location and enhance local SEO efforts.</li>
        <li>Chat systems for real-time communication with your website visitors.</li>
        <li>Google and Bing webmaster tools integration for better website management and performance tracking.</li>
        <li>Implementation of best industry practices to ensure your website follows SEO guidelines and standards.</li>
    </ul>
</div>
  </div>
  {/* view packages */}
<div className="view__packages">
    <h6>View Our Packages Here</h6>
</div>

    <LatestBlogs />
    <Footer />
  </div>
  )
}

export default SeoDataAnalyticsSub;