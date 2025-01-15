import React from 'react'


import BrowseByProduct from './brands/page'
// import Header from './components/home/header'
import Responsive from './components/responsive'
import NewArrival from './newArrival/page'
import Testimonials from './testonomial/page'
import SellingProduct from './onSale/page'
import HeroSection from './hero/page'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Responsive/>
      <HeroSection/>
      <NewArrival/>
      <SellingProduct/>
      <BrowseByProduct/>
      <Testimonials/>
    </div>
  )
}

export default Home
