import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

function Home() {
  return (
    <div className='w-full overflow-hidden bg-[#0B111E]'>
      <Header/>
      <About/>

      <Menu/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home