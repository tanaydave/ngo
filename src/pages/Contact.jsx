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
      action.resetForm()
      
    },
  });
  console.log(errors);
  return (
    <div>
      <Navbar />
      <div>Contact</div>
      <div className="pb-2 mx-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="w-full">
              <input
                type="fname"
                name="first_name"
                id="first_name"
                autoComplete="off"
                placeholder="First Name"
                className="border-2 h-12 w-full "
                value={values.first_name}
                onChange={handleChange}
              />
              {errors.first_name && touched.first_name ?<p>{errors.first_name}</p>:null}
            </div>
            <div>
              <input
                type="name"
                name="last_name"
                id="last_name"
                autoComplete="off"
                placeholder="Last Name"
                className="border-2 h-12 "
                value={values.last_name}
                onChange={handleChange}
              />
              {errors.last_name && touched.last_name ?<p>{errors.last_name}</p>:null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="E-Mail"
                className="border-2 h-12 "
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ?<p>{errors.email}</p>:null}
            </div>
            <div>
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                placeholder="Phone"
                className="border-2 h-12 "
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && touched.phone ?<p>{errors.phone}</p>:null}

            </div>
          </div>
          <div>
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
