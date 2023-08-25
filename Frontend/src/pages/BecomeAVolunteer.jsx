import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {motion as m} from 'framer-motion'
import { useFormik } from "formik";
import VolunteerSchema from "../schemas/volunteerSchema"



const BecomeAVolunteer = () => {
  return (
    <div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      <div className="flex items-center justify-center text-white bg-orange-400 h-60 mb-4 text-8xl ">Become A Volunteer</div>

      <div className=''> 

      </div>

      <Footer />

    </div>
  )
}

export default BecomeAVolunteer
