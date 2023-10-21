import React from 'react'
import "./AudioVisual.css"
import AudioVisualSub from './AudioVisualSub'

function AudioVisual() {
  return (
    <div className='audiovisual__container'>
        <div className="nav">
          <div className="l__side">
            Art1906_ <br />Creative Shops
          </div>
          <div className="r__side"><ul>
            <li>Services</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Contact</li>
            <li>Meet the Team</li>
          </ul></div>
        </div>
        <AudioVisualSub />
    </div>
  )
}

export default AudioVisual