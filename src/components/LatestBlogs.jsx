import React from 'react'
import './Latestblogs.css'

function LatestBlogs() {
  return (
    <div className='latest__blogs'>
        <h3 className='heading'>Latest blogs</h3>
        <h4>Subscribe to out Marketing Blog</h4>
        <div className="blog__container">
            <div className="">
                <img src="" alt="" />
                <p>Unlocking the Power of the Facebook Pixel</p>
            </div>
            <div className="">
            <img src="" alt="" />
                <p>Unlocking the Power of the Facebook Pixel</p>
            </div>
            <div className="">
            <img src="" alt="" />
                <p>Unlocking the Power of the Facebook Pixel</p>
            </div>
        </div>
        <div className="btn__container">
            <button className='btn__readmore'>Read More</button>
        </div>
    </div>
  )
}

export default LatestBlogs