import React from 'react'


import BrowseByProduct from './components/brs/page'
import Header from './components/hero/hero'
import Responsive from './components/home/responsive'
import NewArrival from './components/newArrival/page'
import Testimonials from './components/testonomial/page'
import SellingProduct from './components/selingproduct/page'
import HeroSection from './components/banner/page'

const Home = () => {
  return (
    <div>
      <Header/>
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
