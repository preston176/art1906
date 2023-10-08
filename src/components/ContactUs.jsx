import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contact_us' id='contact'>
        <div className="heading">
        <h3>Contact Us</h3>
        <span>We Are Nice</span>
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
  )
}

export default ContactUs