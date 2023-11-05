import React from 'react'
import "./NewsletterSubscribed.css"
import Footer from '../Footer'

function NewsletterSubscribed() {
    return (
        <div>
            <div className="nav Newsletter__Subscribed">
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
            <div className="newsletter__logo">
                <img src="/subbed.png" alt="" />
            </div>
            <div className="paragraph__newsletter">
                <p>Greetings. You have successfully subscribed to our Newsletter! Check your inbox or spam for our welcome email...</p>
            </div>

            <div className="newsletter__btn">
                <button>Return Home</button>
            </div>

            <div className="in__case">
                <h3>Incase You Missed it</h3>
                <div className="in__case__container">
                    <div className="ldiv">
                        <img src="blog__photo.png" alt="" />
                    </div>
                    <div className="rdiv">
                        <h4>Desiging a website for Randomthoughts.world ...</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>By: Art1906 <br /> Oct 5 2023</p>
                    </div>
                </div>
                <div className="btns">
                    <div className="button__quote">
                        <button>REQUEST A QUOTE</button>
                    </div>
                    <div className="socials">
                        <div className="social__icons">Social</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsletterSubscribed