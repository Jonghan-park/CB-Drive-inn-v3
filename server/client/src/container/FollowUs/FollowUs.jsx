import React from 'react'
import {BsInstagram, BsFacebook, BsYoutube} from 'react-icons/bs'
import './FollowUs.css'

const FollowUs = () => {
  return (
    <div className="followUs-container">
      <div className="title">
        <h1>FollowUs</h1>
        <div className="underline" />
      </div>

      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <a href="http://www.instagram.com">
            <BsInstagram />
            <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <a href="http://www.facebook.com">
            <BsFacebook />
            <span>Facebook</span>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <a href="http://www.YouTube.com">
            <BsYoutube />
            <span> YouTube </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FollowUs