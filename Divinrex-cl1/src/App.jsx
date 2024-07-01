import React from 'react'
import Navbar from './Component/Nav/Navbar'
import About from './Component/About/About'
import ServicePackage from './Component/Service Packages/ServicePackage'
import Contact from './Component/Contact/Contact'
import MyClient from './Component/My Client/MyClient'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About/>
      <ServicePackage/>
      <Contact/>
      <MyClient/>
    </div>
  )
}

export default App
