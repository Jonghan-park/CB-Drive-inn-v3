import React, { useState, useEffect } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {data} from '../../data/slider-data'
import "../Slider/Slider.css"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = data.length
  // slideLength = 1 2 3
  // crrentSlide = 0 1 2

  const autoScroll = true;
  let slideInterval;
  // intervalTime is 5 seconds
  let intervalTime = 5000;

  const nextSlide =() =>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide =() =>{
    setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1)
  }

  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() =>{
    setCurrentSlide(0)
  },[])

  useEffect(() =>{
    if(autoScroll){
      auto()
    }
    return () => clearInterval(slideInterval)
  },[currentSlide])

  return (
    <div className='slider'>
      <BsFillArrowLeftCircleFill className="arrow prev" onClick={prevSlide} />
      <BsFillArrowRightCircleFill className="arrow next" onClick={nextSlide} />
      
      {data.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
            {index === currentSlide && (
              <>
              <img src={slide.image} alt={slide.heading} />
              <div className="content">
                <h2>{slide.heading}</h2>
                <hr />
                <p>{slide.desc}</p>
              </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider