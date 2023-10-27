import React from 'react'
import "./EventsDigitalMarketing.css"
import LatestBlogs from '../LatestBlogs'
import Footer from '../Footer'

function EventsDigitalMarketing() {
  return (
    <div className='audiovisual__container'>
        <div className="nav">
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
        <div className='audiovisualSub'>
        <img src="/events.png" alt="" />
        <h3>Events Digital Marketing Services</h3>
        <div className="paragraph__text">
          <p>In the dynamic and ever-evolving landscape of event organization and management, the need for innovative and effective digital marketing services has never been more crucial. At Art1906, we understand that event organizers and managers face multifaceted challenges in this era of constant connectivity and information overload. That’s why we offer a comprehensive suite of services specifically designed to address these challenges and ensure the resounding success of your event
</p>
        </div>

     
     
       
    
        <div className="why__choose whyy">
          <h4>Why you should choose Art1906 for your Visual-Audio Campaign</h4>
          <div className="pr paragg">
            <h6>Nationwide/ International Event Trending Services</h6>
            <p>Staying ahead of the curve is essential. Our event trending services are your compass in the digital wilderness. We keep a finger on the pulse of the world, identifying trends and cultural nuances that can be harnessed to make your event the talk of the town. With our expertise, your event won’t just be another occasion; it will be a cultural moment.

</p>
          </div>
     
          <div className="pr paragg">
          <h6>Strategic Media Buying Across Multiple Platforms</h6>
            <p>To reach your target audience effectively, you need to be where they are. Art1906 Marketing Agency ensures your event is front and center through strategic media buying on Facebook, Instagram, Twitter, YouTube, Google Search Ads, and LinkedIn. We identify the ideal platforms for your event’s promotion, optimizing your advertising budget and maximizing your reach.
</p>
          </div>
          <div className="pr paragg">
            <h6>Comprehensive Content Creation</h6>
            <p>We are not just a service provider, we are your partner in audio visual communication. Contact us today and find out why you should use us for your audio visual campaign.
</p>
          </div>
          <div className="pr paragg">
            <h6>Hashtag Tracking
</h6>
            <p>Hashtags are the currency of digital engagement. We create and monitor event-specific hashtags, ensuring your content reaches a broader audience and becomes part of the digital conversation. With Art1906, your event will trend organically, further boosting its visibility.

</p>
          </div>
          <div className="pr paragg">
            <h6>Exceptional Graphic Design</h6>
            <p>First impressions matter, and our graphic designers excel at creating stunning visuals that leave a lasting impact. Whether it’s eye-catching social media graphics, event posters, or promotional materials, our designs embody your event’s unique identity and captivate your audience.

</p>
          </div>
        </div>

        <div className="custom__quotation">
          <h4>*Custom Quotations and Project Pricing Available after Identifying Scope of Work</h4>
        
        <div className="paragraph">
          <p>Send us your custom request for a quotation for any of our solutions by filling in the form on this page or get in touch quick on <span>support@art1906.com</span> or Call/WhatsApp (+254) <span>0757 010655.</span></p>
        </div>
        </div>
        <div className='contact_us' id='contact'>
        <div className="heading">
        <h4>Your Email Adress Will Not Be Published. Required Fields Are Marked* </h4>
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
    <LatestBlogs />
    <Footer />
    </div>
    </div>
  )
}

export default EventsDigitalMarketing