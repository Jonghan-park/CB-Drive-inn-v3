import React from 'react'
import './BestMenu.css'
import bestMenu from '../../data/best-menu';

const BestMenu = () => {
  return (
    <div className="bestMenu-container">
      <div className="title">
        <h1>Our Best Menus</h1>
        <div className="underline" />
      </div>
      <div className="box-container">
        {bestMenu.map((bestItem) => {
          const {id, title, img, desc, price} = bestItem;
          return <div className="box" key={id}>
            <div className="bestMenu-image">
              <img src={img} alt={title} />
            </div>
            <div className="bestMenu-content">
              <h3>{title}</h3>
              <h4>{price}</h4>
              <p>{desc}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default BestMenu