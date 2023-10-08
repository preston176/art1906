import React, {useState } from 'react'
import './Footer.css'




function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className='footer'>
        <div className="l__footer">
            &copy; {year} Art1906. All Rights Reserved
        </div>
        <div className="r__footer">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Privacy and Cookie Policy</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer