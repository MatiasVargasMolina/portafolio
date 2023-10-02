import React from 'react'
import Navbar from '../components/Navbar'
import AboutMeCard from '../components/AboutMeCard'

function About() {
    return (
        <>
            <Navbar></Navbar>
            <h1 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center pt-10'>¿Quiénes somos?</h1>
            <div className=' flex justify-center space-x-10 pt-10'>
                <AboutMeCard nombre="Matias Vargas" rol="Desarrollador Backend" avatar="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"></AboutMeCard>
                <AboutMeCard nombre="Sebastian Herrera" rol="Desarrollador Frontend" avatar="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"></AboutMeCard>
            </div>
        </>
    )
}

export default About