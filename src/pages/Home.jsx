import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import IphoneMockup from '../components/IphoneMockup'
import Jumbotron from '../components/Jumbotron'
import DesktopMockup from '../components/DesktopMockup'
function Home() {
  return (
    <div className='flex w-full flex-col justify-content-center align-items-center'>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <IphoneMockup></IphoneMockup>
        <DesktopMockup></DesktopMockup>
    </div>
  )
}

export default Home