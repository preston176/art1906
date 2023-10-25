import React from 'react'
import "./SocialMediaMarketing.css"
import LatestBlogs from '../LatestBlogs'
import Footer from '../Footer'

function SocialMediaMarketing() {
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
    <h3>Social Media Marketing</h3>
  </div>
  <p className='cont__text'>
  At Art1906, social media isn’t just something we check now and then; it’s what we do, so we understand how to choose the best social media platforms to use to achieve your marketing goals. When you outsource your social media support and work with experts, you can focus more energy on the other aspects of your business. We customize every little detail for your business. Our experienced team will work with you to build a customized content creation plan that includes pictures, graphics, ads, captions, and video. 
  </p>
  <div className="section__container">
    <div className="section">
        <div className="img"><img src="/ind_research.png" alt="" /></div>
        <div className="section__desc">
            <h5>INDUSTRY RESEARCH</h5>
        <p>Before we meet, we’ll review your business’ website, social accounts, and industry to better understand who you are as a business, what is trending, and where your consumers are hanging out. It’s not just about posting; it’s about matching your business’ voice, understanding your target customer, and enhancing your brand.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/social_media_strategy.png" alt="" /></div>
        <div className="section__desc">
            <h5>SOCIAL MEDIA STRATEGY</h5>
        <p>Monitoring your analytics need not be as arduous as stock-taking. Our team will provide comprehensive reports on your business page, posts, and advertisements, allowing us to refine your strategy as necessary. This process guarantees that we remain on course and generates the desired results.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/inbound_marketing.png" alt="" /></div>
        <div className="section__desc">
            <h5>INBOUND MARKETING</h5>
        <p>Social media works hand-in-hand with your inbound marketing efforts. Nothing builds engagement and lead generation on social media like a good blog strategy, and nothing grows traffic to a blog strategy like support from social.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/cost_effective_marketing.png" alt="" /></div>
        <div className="section__desc">
            <h5>COST EFFECTIVE MARKETING</h5>
        <p>Social Media Marketing is often more cost effective than other traditional forms of marketing. By leveraging social media platforms, we can reach larger audiences at a lower cost.</p>
        </div>
    </div>
    <div className="section">
        <div className="img"><img src="/increased_marketing_and_conversions.png" alt="" /></div>
        <div className="section__desc">
            <h5>INCREASED TRAFFIC AND CONVERSIONS</h5>
        <p>Through targeted social media ad campaigns and compelling content, we can help drive traffic to your website and increase conversions.</p>
        </div>
    </div>
  </div>

  {/* why you should choose  */}
  <div className="why__smm">
    <h4>Why you should choose Art1906 for your Special Social Media marketing Campaign</h4>
    <h6>Research & Strategy for Your Social Media Marketing Campaign
</h6>
    <p className='parag'>To execute a successful social media marketing campaign, we prioritize identifying the characteristics of your ideal customer or target audience. We achieve this through the creation of a buyer persona, using business intelligence research tools and analyzing past campaign data. This approach allows us to identify emerging trends and gain a competitive edge for your social media marketing campaign, in Kenya or globally.

</p>
<h6>A Data-Driven Approach 
</h6>
    <p className='parag'>Our team is skilled in media buying and targeted advertising on a variety of social media platforms. We also regularly monitor digital marketing results throughout and after campaigns. By utilizing data from in-platform analytics and third-party tools, we can optimize your social media marketing campaign for optimal performance. This approach ensures you get the most value from your advertising budget by providing a wealth of business intelligence data, including metrics like impressions, average conversion rates, post and campaign reach, and other specified filters.

</p>
<h6>Targeted Campaigns for Your Ideal Audience

</h6>
    <p className='parag'>Our social media marketing campaigns on Facebook, Instagram, Twitter, LinkedIn, and YouTube are designed to effectively reach your ideal customer or target audience. We achieve this through filtering their interests, behaviors, browsing habits, age groups, and other filters, thereby creating a digital mix that caters to the platforms frequented by your target users.


</p>
<h6>An Inbound Marketing Approach</h6>
    <p className='parag'>We utilize an inbound marketing approach in our social media marketing strategies to provide useful content to users and potential customers during their buying journey. Our custom content, including social media captions and custom-designed posters and artwork, is tailored to achieve objectives like brand awareness, consideration or conversions, and is designed to reach targeted audiences at the right time, for maximum impact and value.
</p>
<h6>An Inbound Marketing Approach</h6>
    <p className='parag'>We utilize an inbound marketing approach in our social media marketing strategies to provide useful content to users and potential customers during their buying journey. Our custom content, including social media captions and custom-designed posters and artwork, is tailored to achieve objectives like brand awareness, consideration or conversions, and is designed to reach targeted audiences at the right time, for maximum impact and value.
</p>
<h6>A Multi-Platform Approach
</h6>
    <p className='parag'>To reach either B2C or B2B audiences based on factors like interests & behaviors, job roles, life events, browsing habits, age groups/bloc, gender, geolocations, and other filters, we create a custom digital marketing mix comprising of recommended social media platforms to reach your targeted audiences and meet objectives.
</p>
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

export default SocialMediaMarketing;