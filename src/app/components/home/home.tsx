import React from 'react'
import Header from './hero'
import Nav from './nav'
import Responsive from './responsive'
import Banner from './banner/page'
import NewArrival from './newArrival/page'
import SellingProduct from './selingproduct/page'
import BrowseByProduct from './brs/page'
import Testimonials from './ourcustomer/page'

const Home = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Responsive/>
      <Banner/>
      <NewArrival/>
      <SellingProduct/>
      <BrowseByProduct/>
      <Testimonials/>
    </div>
  )
}

export default Home
