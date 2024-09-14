import React from 'react'
import Link from 'next/link'
import Navbar from './fonts/components/Navbar'
import Home from './fonts/components/Home'
import Footer from './fonts/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default page
