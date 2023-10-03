import React from 'react'
import "./Section2.css"
function Section2() {
  return (
    <div className='section2'>
        <h4>We are...</h4>
        <div className="icons">
            <div className="brand">
                <img src="/public/brand.png" alt="" />
                <p>BRAND</p>
                <p>Your own identity</p>
            </div>
            <div className="content">
                <img src="/public/content.png" alt="" />
                <p>CONTENT</p>
                <p>Acknowledging Your Uniqueness</p>
            </div>
            <div className="media">
                <img src="/public/media.png" alt="" />
                <p>MEDIA</p>
                <p>Engagement on your Behalf</p>
            </div>
            <div className="audience">
                <img src="/public/audience.png" alt="" />
                <p>AUDIENCE</p>
                <p>Interacts with you</p>
            </div>
        </div>
    </div>
  )
}

export default Section2