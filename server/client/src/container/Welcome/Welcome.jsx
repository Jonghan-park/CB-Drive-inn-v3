import React from 'react'
import './Welcome.css'
import pastImage from '../../images/pastImage.png'

const Welcome = () => {
  return (
    <div className="welcome-box">
      <div className="title">
        <h1>Welcome To <span>CB Drive INN</span></h1>
        <div className="underline" />
      </div>
      
      <div className="welcome-row">
        <div className="col-1">
         <h4>Little story</h4>
          <p>You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.
For oil spots on the floor, nothing beats parking a motorbike in the lounge.
Always bring cinnamon buns on a deep-sea diving expedition.</p>
        </div>

        <div className="col-2">
          <img src={pastImage} className="img-past" alt="Past Image" />
        </div>
      </div>
    </div>
  )
}

export default Welcome