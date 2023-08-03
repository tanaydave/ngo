import { React, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import misvis from "../assets/misvis.jpg";
import { useFormik } from "formik";
import DonationSchema from "../schemas/donationSchema";

const SingleCause = () => {
  const [value, setValue] = useState("20");

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    donation_value: {value},
  };

  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: DonationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <div>
      <div className=" sticky top-0 transition-all ease-in z-50">
        <Navbar />
      </div>
      <div className=" grid grid-cols-4 px-40 py-32">
        <div className=" col-span-3  border-2 p-2">
          <img src={misvis} alt="" className="h-[110vh] rounded-3xl" />
          <div className="relative bottom-16 bg-white mx-10 shadow-xl rounded-xl">
            <div className="p-12 flex flex-col">
              <div className="text-3xl font-semibold">
                Lorem ipsum dolor sit.
              </div>
              <div className="grid grid-cols-7 items-center border-b-2 gap-8 pt-16 pb-8">
                <div className=" col-span-5">
                  <div className=" ">
                    <div className=" bg-orange-200 relative h-[10px] w-full rounded-2xl">
                      <div className=" bg-orange-500 absolute top-0 left-0 h-full w-[60%] rounded-2xl">
                        <span className="bg-orange-500 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                          <span className="bg-orange-500 absolute bottom-[-2px] left-1/2  h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                          60%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-span-2">Rs 10000 of Rs 2 lakh </div>
              </div>
              <div className="py-8 border-b-2">
                <div className=" shadow-slate-300 shadow-md rounded-full px-2 w-80">
                  <span>Rs</span>
                  <span>
                    <input
                      className=" focus:outline-none  p-2 text-lg font-bold"
                      value={value}
                    />
                  </span>
                </div>
                <div className="flex gap-4  py-4">
                  <div
                    onClick={() => {
                      setValue(20);
                    }}
                    className=" transition-all hover:text-orange-500 border-2 rounded-3xl p-1 px-4 cursor-pointer text-center"
                  >
                    Rs 20
                  </div>
                  <div
                    onClick={() => {
                      setValue(50);
                    }}
                    className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                  >
                    Rs 50
                  </div>
                  <div
                    onClick={() => {
                      setValue(100);
                    }}
                    className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                  >
                    Rs 100
                  </div>
                  <div
                    onClick={() => {
                      setValue(250);
                    }}
                    className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                  >
                    Rs 250
                  </div>
                  <div
                    onClick={() => {
                      setValue(500);
                    }}
                    className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                  >
                    Rs 500
                  </div>
                  <div
                    onClick={() => {
                      setValue("");
                    }}
                    className="text-white bg-orange-500  border-2 rounded-3xl py-1 px-4 text-center cursor-pointer"
                  >
                    Custom Amount
                  </div>
                </div>
              </div>
              <div className="py-12">
                <div>Personal Info</div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6 p-4">
                    <div className="w-full ">
                      <input
                        type="fname"
                        name="first_name"
                        id="first_name"
                        autoComplete="off"
                        placeholder="First Name"
                        className=" h-16 w-full p-3 border-2 rounded-full "
                        value={values.first_name}
                        onChange={handleChange}
                      />
                      {errors.first_name && touched.first_name ? (
                        <p>{errors.first_name}</p>
                      ) : null}
                    </div>
                    <div className="">
                      <input
                        type="name"
                        name="last_name"
                        id="last_name"
                        autoComplete="off"
                        placeholder="Last Name"
                        className=" h-16 w-full p-3 border-2 rounded-full "
                        value={values.last_name}
                        onChange={handleChange}
                      />
                      {errors.last_name && touched.last_name ? (
                        <p>{errors.last_name}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 p-4">
                    <div className="">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="E-Mail"
                        className=" h-16 w-full p-3 border-2 rounded-full "
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && touched.email ? (
                        <p>{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="  ">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        placeholder="Phone"
                        className=" h-16 w-full p-3 border-2 rounded-full "
                        value={values.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && touched.phone ? (
                        <p>{errors.phone}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className=" text-center flex my-2 justify-between items-center ">
                    <input
                      type="submit"
                      value={"donate now"}
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-transparent border-2 hover:text-orange-500 hover:border-2 hover:border-orange-500"
                    />
                    {<div>total donation:{value}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1  border-2"> side categories</div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleCause;
