import React from 'react'
import "./NotFound.css"
import Footer from './Footer'

function NotFound() {
  return (
    <div>
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
        <div className="not__found__logo">
          <img src="/404notfound.png" alt="404_not_found" />
        </div>
        <div className="not__found__desc">
          <p>We're sorry, but the page you requested could not be found. It seems that you have encountered an error 404, which means that the server was unable to locate the page you were looking for. This could be due to a number of reasons, such as:</p>
        </div>
        <div className="reasons">
        <ul>
          <li>The page has been moved, renamed, or deleted.</li>
          <li>The URL you entered was incorrect or outdated.</li>
          <li>The link you followed was broken or expired.</li>
          <li>There is a problem with the website or the server.</li>
        </ul>
        </div>
        <div className="other__desc">
          <p>Please check the spelling of the URL, or try using the search function or the navigation menu to find what you are looking for. If you still can't find the page, please contact us and let us know what happened. We apologize for any inconvenience and appreciate your patience.
</p>
<p className='further__desc'>Thank you for visiting our website. We hope to see you again soon.</p>
        </div>
        <div className="request__quote__btn">
    <button>Return Home</button>
  </div>
  <Footer />
    </div>
  )
}

export default NotFound