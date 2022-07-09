import React from 'react'

import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import contactImage from '../../images/contact.png'
import Location from '../Location/Location'
import FollowUs from '../FollowUs/FollowUs'
import SendEmail from '../SendEmail/SendEmail'
import './Contact.css'

const Contact = () =>(
    <div className="whole-contact-container">
        <div className="contact-title">
            <h1>Contact Us</h1>
            <div className="underline" />
        </div>

        <div className="contact-container">
            <div className="contact-image">
                <img src={contactImage} alt="contact image" />
            </div>
            <div className="contact">
                <div className="address">
                    <div className="icon">
                        <h3><FiMapPin className='each-icon' />Address</h3>
                    </div>
                    <p>789 Northmount Dr NW, Calgary, AB T2L 0L6, Canada</p>
                </div>
                <div className="phone">
                    <div className="icon">
                        <h3><FiPhone className='each-icon' />Phone</h3>
                    </div>
                    <p> +1 403-282-8188</p>
                </div>
                <div className="email">
                    <div className="icon">
                        <h3><FiMail className='each-icon' />Email</h3>
                    </div>
                    <SendEmail />
                </div>
            </div>
        </div>
        <Location />
        <FollowUs />
    </div>
)

export default Contact