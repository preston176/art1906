import React from 'react'
import './Services.css'

function Section3() {
  return (
    <div className='section3'>
        <h4>SERVICES</h4>
        <div className="row__wrapper">
<div className="row1">
    <div className="smm">
        <img src="/public/smm.png" alt="" />
        <p>Social Media Marketing</p>
        <p>We Take Your Social Media Game to the Next Level Across Facebook, Instagram, Twitter, LinkedIn, and Beyond!</p>
    </div>
    <div className="webdev">
        <img src="/public/webdev.png" alt="" />
        <p>Website Development and Maintenance</p>
        <p>I'm sure that guy you know is good but we are better ...</p>
    </div>
    <div className="seotraffic">
        <img src="/public/seotraffic.png" alt="" />
        <p>SEO and Data Analytics</p>
        <p>Putting you in the right place at the right time</p>
    </div>
</div>
<div className="row2">
<div className=""></div>
    <div className=""></div>
    <div className=""></div>
</div>
<div className="row3">
<div className=""></div>
    <div className=""></div>
    <div className=""></div>
</div>
    </div>
    </div>
  )
}

export default Section3