import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

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
      <Navbar />
      <div>Contact</div>
      <div className="flex justify-center gap-20">
        <div className="flex flex-col items-start">
          <div className="text-4xl font-semibold py-6">Our Information</div>
          <div>
            <p className="py-3 font-medium">Email & Website</p>
            <p>email@email.com</p>
            <p>www.website.com</p>
          </div>
          <div className="py-6">
           <p className="py-3 font-medium">Phone</p> 
           <p>1111111111</p>
           <p>1111111111</p>
          </div>
          <div>
            <p className="font-medium py-3">Address</p>
            <p className=" max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum labore nam eligendi?</p>
          </div>

        </div>
        <div className=" ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9495415482415!2d72.82508847510648!3d18.933627456426834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1788eef87f3%3A0xa3d31bfcbb3c22fd!2sChurchgate%20station!5e0!3m2!1sen!2sin!4v1688360163784!5m2!1sen!2sin"  height="450" width="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border-0"></iframe>

        </div>

      </div>
      <div className="py-20 mx-4">
        <div className=" text-center text-6xl pb-12 font-semibold font-Poppins">Get In Touch </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="w-full border-2">
              <input
                type="fname"
                name="first_name"
                id="first_name"
                autoComplete="off"
                placeholder="First Name"
                className=" h-12 w-full  p-4"
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
                className=" h-12 w-full  p-4"
                value={values.last_name}
                onChange={handleChange}
              />
              {errors.last_name && touched.last_name ?<p>{errors.last_name}</p>:null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="border-2">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="E-Mail"
                className=" h-12 w-full p-4"
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
                className=" h-12 w-full p-4"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && touched.phone ?<p>{errors.phone}</p>:null}

            </div>
          </div>
          <div className="py-4">
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              autoComplete="off"
              className="h-60 w-full border-2 p-4 text-start"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" className="bg-orange-500 text-white p-3" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
