import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import contact from "../assets/contact.jpg"
import {motion as m} from "framer-motion"


import { useFormik } from "formik";
import ContactSchema from "../schemas/contactSchema";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const phone1 = "+91 9152898940";
  const phone2 = "+91 8210400672";
  const emailAddress1 = "info@orinovafoundation.org";
  const emailAddress2 = "trust@orinovafoundation.org";


  const phoneHref1 = `tel:${phone1}`;
  const phoneHref2 = `tel:${phone2}`;
  const mailtoHref1 = `mailto:${emailAddress1}?`;
  const mailtoHref2 = `mailto:${emailAddress2}?`;

  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values,action) => {
      console.log(values)
      action.resetForm()
      
    },
  });
  // console.log(errors);
  return (
    <div className=" font-Poppins">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      <div className="flex items-center justify-center text-white bg-orange-400 h-60 mb-12 text-8xl ">Contact</div>
      <div 
      // style={{
      //     backgroundImage: `url(${contact})`
      //   }} className=" bg-no-repeat  bg-contain bg-center object-contain h-72"
      >
       
        </div>
      <div className="flex md:flex-row flex-col justify-center gap-20 ">
        <div className="flex flex-col items-center md:items-start ">
          <div className="text-4xl font-semibold py-3">Our Information</div>
          <div>
            <p className="py-3 font-medium">Email</p>

            <p>
          <a href={mailtoHref1}>{emailAddress1}</a>

            </p>
          
            <p>
          <a href={mailtoHref2}>{emailAddress2}</a>

            </p>

          </div>
          <div className="py-6">
           <p className="py-3 font-medium">Phone</p> 
           <p>
           <a href={phoneHref1}>{phone1}</a>
           </p>
           <p>
           <a href={phoneHref2}>{phone2}</a>
           </p>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <p className="font-medium py-3">Address</p>
            <p className="text-center">301 , Siddhi vinayak Apartment, Yarpur Khagul Road, Yarpur, Patna -800001</p>
          </div>

        </div>
        <div className=" ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9495415482415!2d72.82508847510648!3d18.933627456426834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1788eef87f3%3A0xa3d31bfcbb3c22fd!2sChurchgate%20station!5e0!3m2!1sen!2sin!4v1688360163784!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border-0 h-60 w-80 md:mx-0 mx-12 md:h-[400px] md:w-[550px]"></iframe>

        </div>

      </div>
      <div className="py-20 mx-4 md:mx-20">
        <div className=" text-center text-6xl pb-12 font-semibold font-Poppins">Get In Touch </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 p-4">
            <div className="w-full border-2">
              <input
                type="fname"
                name="first_name"
                id="first_name"
                autoComplete="off"
                placeholder="First Name"
                className=" h-16 w-full  p-4"
                value={values.first_name}
                onChange={handleChange}
              />
              {errors.first_name && touched.first_name ?<p>{errors.first_name}</p>:null}
            </div>
            <div className="border-2">
              <input
                type="name"
                name="last_name"
                id="last_name"
                autoComplete="off"
                placeholder="Last Name"
                className=" h-16 w-full  p-4"
                value={values.last_name}
                onChange={handleChange}
              />
              {errors.last_name && touched.last_name ?<p>{errors.last_name}</p>:null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 p-4">
            <div className="border-2">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="E-Mail"
                className=" h-16 w-full p-3"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ?<p>{errors.email}</p>:null}
            </div>
            <div className="border-2">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="off"
                placeholder="Phone"
                className=" h-16 w-full p-3"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && touched.phone ?<p>{errors.phone}</p>:null}

            </div>
          </div>
          <div className="p-4">
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              autoComplete="off"
              className="h-40 w-full border-2 p-3 text-start"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div className=" text-center">
            <input type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-transparent border-2 hover:text-orange-500 hover:border-2 hover:border-orange-500" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
