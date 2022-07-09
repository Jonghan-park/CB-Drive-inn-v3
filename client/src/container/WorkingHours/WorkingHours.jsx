import React from 'react'

import './WorkingHours.css'

export const WorkingHours = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Business of <br /> Operation</h1>
        <div className="underline" />
      </div>
      <div className="businessOfOperation">
        <h3>Mon - Fri: </h3>
        <p>10:00 A.M - 06:00 P.M</p>
        <h3>Sat & Sun: </h3>
        <p>11:00 A.M - 06:00 P.M</p>
      </div>
    </div>
  )
}
