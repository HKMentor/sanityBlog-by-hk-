import React from 'react'
import Hero from './component/Hero'
import FeaturedProducts from './component/FeaturedProducts'
import Header from './component/Header'

const home = () => {
  return (
    <div>
     <Header/>
      <Hero/>
      <FeaturedProducts/>

    </div>
  )
}

export default home
