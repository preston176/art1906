import React from 'react'
import "./WebDevMaintenance.css"
import LatestBlogs from '../LatestBlogs'
import Footer from '../Footer'

function WebDevMaintenance() {
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
    <img src="/webdev.png" alt="" />
    <h3>Website Development and Maintenance</h3>
  </div>
  <p className='cont__text'>
  Your website is the ultimate hub for engaging with customers. It tells your brand's story, establishes connections, generates leads, drives sales, and delights consumers. Our team of professional website designers are skilled at creating websites that help grow your business.
  </p>
  <div className="section__container">
    <div className="section">
        <div className="img"><img src="/website_creation.png" alt="" /></div>
        <div className="section__desc">
            <h5>WEBSITE CREATION & WEB DESIGN</h5>
        <p>More people will form their first opinion of your business from your website, and if your online presence doesn’t make a good impression, they won’t be back. A great website is eye-catching and informative, simple yet compelling. At Art1906, we are known for creating custom websites that capture your brand’s voice and vision.</p>
        </div>
    </div>
    <div className="section">
        <div className="img"><img src="/web_page_design.png" alt="" /></div>
        <div className="section__desc">
            <h5>WEB PAGE DESIGN</h5>
        <p>Quality web graphics and user interface elements are crucial in enhancing customers’ user experience on your website. This increases their chances of achieving your marketing goals, such as making a purchase or completing a contact us form.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/website_hosting.png" alt="" /></div>
        <div className="section__desc">
            <h5>WEBSITE HOSTING</h5>
        <p>Efficient, Reliable, and Secure: Our top priority is to ensure that users don't have to endure lengthy wait times to access your content. We achieve this through diligent management of your hosting servers, ensuring that the websites we oversee enjoy over 99% uptime.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/website_analytics.png" alt="" /></div>
        <div className="section__desc">
            <h5>WEBSITE ANALYTICS</h5>
        <p>To determine whether your website is achieving its objectives, you need to keep track of the numbers. We make this task as simple as possible by installing, monitoring, and presenting reports on your website's performance. Do you want to learn about your web traffic's origins? We've got you covered. Do you want to see the geographic location of your site visitors by state, city, or zip code? We have that information as well. All of this data is critical in delivering the best experience to your users.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/custom_wordpress_development.png" alt="" /></div>
        <div className="section__desc">
            <h5>CUSTOM WORDPRESS DEVELOPMENT</h5>
        <p>As the internet's leading CMS, WordPress is undoubtedly a powerful tool. However, simply installing WordPress and building a site won't cut it. Our team is proficient in the language of WordPress, allowing us to write code that will make your website do anything you need it to. Whether you want to work with us or not, it's essential to have a firm grasp on how WordPress operates to maximize its potential.</p>
        </div>
    </div>
    <div className="section">
        <div className="img"><img src="/search_engine_optimization.png" alt="" /></div>
        <div className="section__desc">
            <h5>SEARCH ENGINE OPTIMIZATION</h5>
        <p>Search Engine Optimization (SEO) has two core components: content optimization and technical SEO. Content optimization ensures that your website is prominent online, with relevant, unique and useful web content. Meanwhile, technical SEO ensures that your website is functioning well. Investing in an SEO strategy can boost your website's rankings when people search for keywords related to your products and services on search engines like Google and Bing.</p>
        </div>
    </div>
  </div>

  {/* why you should choose  */}
  <div className="why__smm">
    <h4>Why you should choose Art1906 for your Website Development and Maintenance </h4>
  
    <p className='parag'>Art1906 is a leading web design and development company that specializes in creating stunning and user-friendly websites for various niches and industries.
We have a team of experienced and talented web designers and developers who can handle any project size and complexity with ease and efficiency.
</p>
<h6>A wide range of web design and development services. 
</h6>
    <p className='parag'>Art1906 offers a range of web design and development services, such as custom website design, responsive web design, e-commerce website development, WordPress website development, SEO optimization, and more.


</p>
<h6>Responsive Design
</h6>
    <p className='parag'>With more than 50% of internet traffic coming from mobile devices, it’s crucial to have a website that’s optimized for all screen sizes. We build websites with responsive design, meaning they automatically adjust to fit the screen of any device.
</p>
<h6>User-Friendly Interface
</h6>
    <p className='parag'>A website’s usability is essential to its success. Art1906 websites have a user-friendly interface that’s easy to navigate, allowing visitors to find what they’re looking for quickly and easily.
</p>
<h6>SEO Optimization
</h6>
    <p className='parag'>Our websites are optimized for search engines, making it easier for potential customers to find your business online. The agency uses SEO best practices to ensure your website ranks high in search engine results pages.

</p>
<h6>Customization
</h6>
    <p className='parag'>Every business is unique, and your website should reflect that. We customize our websites, allowing you to tailor your website to your specific needs and brand.

</p>
<h6>Scalability
</h6>
    <p className='parag'>As your business grows, so should your website. Our websites are scalable, meaning they can handle an increasing amount of traffic and functionality as your business expands.


</p>
<h6>Cost-Effective
</h6>
    <p className='parag'>Art1906 website design and redesign services are cost-effective, allowing you to get a high-quality website without breaking the bank.

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

export default WebDevMaintenance;