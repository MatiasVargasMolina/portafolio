import React from 'react'
import Navbar from '../components/Navbar'
import Technologies from '../components/Technologies'
function Services() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex justify-center space-x-10 pt-20'>
        <Technologies imagen="https://img.freepik.com/free-psd/laptop-mockup-white_160403-30.jpg" nombreServicio="Aplicacion web" descricionServicio="Nuestra Plataforma de Desarrollo de Software Web es una herramienta integral diseñada para acelerar y simplificar el proceso de creación de aplicaciones web. Con un enfoque centrado en la eficiencia y la colaboración, ofrecemos a los desarrolladores y equipos de desarrollo de software una experiencia unificada desde la concepción hasta la implementación."></Technologies>
        <Technologies imagen="https://weandthecolor.com/wp-content/uploads/2022/01/Smartphone-Screen-iPhone-Photoshop-Mockups-2-696x522.jpg" nombreServicio="Aplicacion movil" descricionServicio="Nuestra Plataforma de Desarrollo de Aplicaciones Móviles es una herramienta poderosa y versátil diseñada para simplificar y agilizar el proceso de creación de aplicaciones para dispositivos móviles. Esta plataforma está creada pensando en desarrolladores y empresas que desean llevar sus ideas al mercado de aplicaciones de manera eficiente y efectiva."></Technologies>
        </div>
    </div>
  )
}

export default Services