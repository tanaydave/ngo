import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {motion as m} from "framer-motion"

const Gallery = () => {
  return (
    <m.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}>
       <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
        <div>
            

        </div>
        <Footer/>
      
    </m.div>
  )
}

export default Gallery
