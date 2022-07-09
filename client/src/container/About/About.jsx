import React from 'react'
import team from '../../images/aboutUs.jpeg'
import { WorkingHours } from '../WorkingHours/WorkingHours'
import './About.css'

const About = () => (
    <>
    <div className="about">
        <div className="main">
        <img src={team} alt="team" />
            <div className="about-text">
                <div className="title">
                <h1>About Us</h1>  
                <div className="underline" />
                </div>
                    <div className="history-row">
                        <div className="col-1">
                        <h3>History</h3>  
                        <p>You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.
For oil spots on the floor, nothing beats parking a motorbike in the lounge.
Always bring cinnamon buns on a deep-sea diving expedition.</p>  
                        </div>    
                    </div>      
            </div>
        </div>
    </div>
        <WorkingHours />
    </>
)

export default About