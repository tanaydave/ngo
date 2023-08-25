import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {motion as m} from 'framer-motion'
import { Document, Page } from 'react-pdf';



const Approvals = () => {
    const approvalUrl = `${process.env.PUBLIC_URL}/approval.pdf`
    const darpanUrl = `${process.env.PUBLIC_URL}/darpan.pdf`
    const orinovaUrl = `${process.env.PUBLIC_URL}/orinova.pdf`

    const approval_BUrl = `${process.env.PUBLIC_URL}/approval_B.pdf`


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
      <div className='flex flex-col px-20 py-12'>
        <div className='text-3xl'>Documents And Approvals</div>
        <ul className='py-6 flex flex-col gap-4 list-disc'>
            <li ><a className='hover:text-orange-400' href={approvalUrl}>Certificate of Incorporation</a></li>
            <li ><a className='hover:text-orange-400' href={darpanUrl}>Darpan Registration </a></li>
            <li ><a className='hover:text-orange-400' href={approval_BUrl}>License under section 8(1) of the Companies Act,2013 </a></li>
            <li ><a className='hover:text-orange-400' href={orinovaUrl}>Quality Management System Certification </a></li>


        </ul>

      </div>

      <Footer />
    </div>
  )
}

export default Approvals
