import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import IphoneMockup from '../components/IphoneMockup'
import Jumbotron from '../components/Jumbotron'
import DesktopMockup from '../components/DesktopMockup'
function Home() {
  return (
    <div className='flex w-full flex-col'>
    <Navbar />
    <Jumbotron />
    <div className="flex justify-center w-full mt-8">
      <div className="w-full md:w-1/2 px-4">
        <DesktopMockup />
      </div>
      <div className="w-full md:w-1/2 px-4">
        <IphoneMockup />
      </div>
    </div>
  </div>
  )
}

export default Home