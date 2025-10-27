import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import MenuSection from '@/components/MenuSection'

function Home() {
  return (
    <div className='w-full overflow-hidden bg-[#0B111E]'>
      <ToastContainer/>
      <Header/>
      <About/>

      <MenuSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home