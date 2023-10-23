import React from 'react'
import "./Contdevsub.css"
import LatestBlogs from '../LatestBlogs'
import Footer from '../Footer'

function Contdevsub() {
  return (
    <div>
        <div className="nav seo">
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
    <img src="/contentdevelopment.png" alt="" />
    <h3>Content Development</h3>
  </div>
  <p className='cont__text'>
  Art1906 utilizes graphic design, blogs, eBooks, videos, webinars, podcasts, whitepapers, infographics, email campaigns, & more to generate website traffic and leads from all business types, from service-based companies to eCommerce businesses. Businesses that produce inbound marketing content position themselves as thought leaders or industry experts.
  </p>
  <p className="cont__text2">
  Such content attracts visitors to your website, engages with them during their decision-making, and continues to delight them even after purchasing from you. You earn consumer trust, and eventually, you easily win the sale. Our inbound marketing specialists can support your team in crafting and sharing your marketing content to drive conversions and increase your profit. Through online forms & landing page optimization, we can capture lead contact information, allowing your business to access easy-to-close sales.
  </p>
  <div className="section__container">
    <div className="section">
        <div className="img"><img src="/contentcreation.png" alt="" /></div>
        <div className="section__desc">
            <h5>Content Creation</h5>
        <p>A solid inbound strategy requires a strong foundation of content creation. Without it, your business may struggle to achieve its goals. That's why we collaborate with you to produce custom content based on our brainstorming and planning sessions. Our goal is to develop compelling and relevant content that can continue to drive traffic to your website and expand your online presence over time.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/graphdesign.png" alt="" /></div>
        <div className="section__desc">
            <h5>Graphic Design</h5>
        <p>Our designers sit down with you to learn what makes your business stand out and incorporate that into your design. We can update your logo design or start from scratch. Get custom designs for print, digital ads, brochures, ebooks, t-shirts, promotional items, and more</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/marketing.png" alt="" /></div>
        <div className="section__desc">
            <h5>Marketing management Automation Setup</h5>
        <p>We’ll use a comprehensive inbound marketing and sales software platform to create and distribute essential inbound materials and collect and communicate with inbound sales leads.</p>
        </div>
    </div>

    <div className="section">
        <div className="img"><img src="/extensive.png" alt="" /></div>
        <div className="section__desc">
            <h5>Extensive Research and Setup</h5>
        <p>This initial phase takes place before any plan commences and includes industry studies, competitive analyses, content strategy development, keyword and KPI evaluations, target persona identification, and ROI measuring determinations.</p>
        </div>
    </div>
  </div>

  {/* why you should choose  */}
  <div className="why">
    <h4>Why you should choose Art1906 for your Content Development.</h4>
    <p className='parag'>Your creative assets should contain the most relevant messages at the highest possible quality to produce your desired results. As a full-service creative production agency, our team can guide you through the creative production process from inception to implementation.
</p>
    <p className='parag'>We’ll work with you to gather information about your company and goals. As we move forward, you will gain a clear picture of the project’s timeline and budget. We will collaborate with you to create all the different pieces of your project. As everything starts to come together, we’ll review creatives with you and incorporate all of your feedback before we lock in the final look of the assets for your campaign. When it’s time to Launch, our team will monitor your campaign’s success and share a complete analysis with you via custom dashboards and reports</p>
  </div>
  {/* form */}
  <div className="custom__quot__content contdev">
          <h4>*Custom Quotations and Project Pricing Available after Identifying Scope of Work</h4>
        
        <div className="cont_dev__paragraph">
          <p>Send us your custom request for a quotation for any of our solutions by filling in the form on this page or get in touch quick on <span>support@art1906.com</span> or Call/WhatsApp (+254) <span>0757 010655.</span></p>
        </div>

        
        </div>

        <div className="heading__cont_dev">
        <h4>Your Email Adress Will Not Be Published. Required Fields Are Marked* </h4>
        </div>

  <div className="content form__container">
        <form action="">
            <div className="form__names">
            <input type="text" placeholder='First Name*'/>
            <input type="text" placeholder='Last Name*'/>
            </div>
            <div className="form__names">
            <input type="text" placeholder='Job title*'/>
            <input type="email" placeholder='Your Email*'/>
            </div>
            <div className="form__names">
            <input type="text" placeholder='Company name*'/>
            <input type="text" placeholder='Country/Region'/>
            </div>
            <div className="form__names web">
                <input type="text" placeholder='Website URL*' />
            </div>
            <div className="form__names desc">
                <input type="text" placeholder='What best describes your Industry*' />
            </div>
            <div className="form__names emp">
                <input type="text" placeholder='Number of Employees*' />
            </div>
            <div className="content checkbox__heading">
                <p>Which of Art1906's Marketing Services are you most interested in? Check all that apply. *</p>
            </div>
            <div className="checkbox__container">
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Social Media Marketing</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Website Development and Maintenance</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">SEO and Data Analytics</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Email Marketing</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Events Digital Marketing Services</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Campaign Strategy</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Content Development</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Media Buying</span>
                </div>
                <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span htmlFor="">Audio and Visual Suite</span>
                </div>
                <div className="form__footer">
                    <p>Briefly describe your marketing challenge in more detail.*</p>
                    
                </div>
                <textarea className='textarea' name="describe" id="" cols="10" rows="5"></textarea>
            </div>
            <div className="btn__submit__container">
                <button type='submit'>Request a consultation</button>
            </div>
        </form>
    </div>
    <LatestBlogs />
    <Footer />
  </div>
  )
}

export default Contdevsub