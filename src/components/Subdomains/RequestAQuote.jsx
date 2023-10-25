import React from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import ServicesHome from './ServicesHome'
import "./RequestAQuote.css"
import "../ContactUs.css"

function RequestAQuote() {
  return (
    <div>
        <Navbar />
        <ServicesHome />
        <div className='services__sub'>
            <div className="services__sub__container">
                <div className="service">
                    <div className="service__logo">
                        <img src="/logo1.png" alt="" />
                    </div>
                    <div className="service__text">
                        <h3>PROFESSIONAL SERVICES</h3>
                        <p>Accompanied by your custom quotation is a standard agency contract outlining what we are mandated to do for you based on the project quotation.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="service__logo">
                        <img src="/logo2.png" alt="" />
                    </div>
                    <div className="service__text">
                        <h3>PLANS AND PRICING</h3>
                        <p>Our prices are exclusive of V.A.T and are available as one-off or renewable monthly, bi-annually or annually. Please note that prices may vary depending on the custom requirements of each client.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="service__logo">
                        <img src="/logo3.png" alt="" />
                    </div>
                    <div className="service__text">
                        <h3>BILLING MODEL</h3>
                        <p>Our pricing model uses per-hour billing, allowing us to offer flexible payment options for both short-term and long-term projects.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="service__logo">
                        <img src="/logo4.png" alt="" />
                    </div>
                    <div className="service__text">
                        <h3>PARTNER SERVICES</h3>
                        <p>Our agency provides supplementary services such as photography, video production, creative design, printing, and branding at an add-on rate.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        {/* request a quote */}

        <div className="request__quote">
            <div className="para1">
                <p>Request a quote for any of our affordable digital marketing services. Our core services include SEO, Social mediam management, PPC and more. 
</p>
            </div>
            <div className="para2">
                <p>Get custom quotations for one-off or renewable projects - Monthly, bi-monthly or annually. Request a quote now and take your online presence to the next level with our expert team. 
 
</p>
            </div>
            <div className="para3">
                <p>Send us your custom request for a quotation for any of our solutions by filling in the form on this page or get in touch quick on <span>support@art1906.com</span> or Call/WhatsApp (+254) <span>0757 010655</span>.
</p>
            </div>
        </div>
        <div className='contact_us' id='contact'>
        <div className="heading">
    
        <span>Your Email Adress Will Not Be Published. Required Fields Are Marked* </span>
        </div>

    <div className="form__container">
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
            <div className="checkbox__heading">
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
                <span htmlFor="">Graphic Design</span>
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
    <Footer />
    </div>
  )
}

export default RequestAQuote