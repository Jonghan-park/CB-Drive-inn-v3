import React from 'react'
import Slider from '../../components/Slider/Slider'
import BestMenu from '../../container/BestMenu/BestMenu'
import Testimonials from '../../container/Testimonials/Testimonials'
import Welcome from '../../container/Welcome/Welcome'

const Main = () => (
    <>
      <Slider />
      <Welcome />
      <BestMenu />
      <Testimonials />
    </>
  )

export default Main