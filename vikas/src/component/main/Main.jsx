import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import DataSection from './DataSection'



const Main = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <Hero />
        <DataSection />
      </div>
    </>
  )
}

export default Main