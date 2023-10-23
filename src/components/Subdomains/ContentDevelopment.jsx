import React from 'react'
import "./ContentDevelopment.css"
import Footer from '../Footer'

function ContentDevelopment() {
  return (
    <div className='content__dev__container'><div className="nav seo">
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
  
  <div className="head__container">
    <img src="/contentdevelopment.png" alt="" />
    <h3>Content Development</h3>
  </div>

  <div className="pg__container">
    <div className="pg1">
        <p>We aim to fulfill the design, visual and creative needs of your business with our affordable Content development services. From identifying the desired design outcome, researching the latest design trends in your industry, brainstorming design ideas, sketching out mockups, building and putting the design into production, Art1906 desires to help you establish connect, interact, and engage with your targeted customers – in a more creative and meaningful manner.
</p>
    </div>
    <div className="pg1">
        <p>To learn more about our services, reach out to us at <span>support@art1906.com</span> or <br /> Call/WhatsApp (+254) <span>0757 010655.</span> We offer personalized digital consultations and customized quotes to meet your needs.</p>
    </div>
    <div className="text">
        <p>Our designers understand the need for functionality, speed to deliver, a uniform brand thematic and communicating brand value.  with our range of works in producing collateral for:
</p>
<ul>
    <li>Complete Brand Toolkits (Contain a whole spectrum of brand assets as below)</li>
    <li>Digital marketing artwork (Social media marketing posters, Google banner ads)</li>
    <li>Website banners (Sidebar, footers, for landing pages) widegtized ad sizes, in-page ads and other custom dimensions.</li>
    <li>E-mail footers</li>
    <li>Logo/Animated Logos</li>
    <li>Infographic Design</li>
    <li>Letterheads</li>
    <li>For-print design (Outdoor advertising such as Billboards and Display banners)</li>
    <li>Newsletter design (Online and physical)</li>
    <li>Brochures</li>
    <li>Flyers</li>
    <li>Animated GIF Banners</li>
    <li>PowerPoint Designs</li>
    <li>Book cover Design</li>
    <li>Web Design (static design only)</li>
</ul>

<div className="custom__quot__content">
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
    </div>
  </div>
<Footer />
  </div>
  )
}

export default ContentDevelopment