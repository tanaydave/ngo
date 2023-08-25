import { React, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import misvis from "../assets/misvis.jpg";
import { useFormik } from "formik";
import DonationSchema from "../schemas/donationSchema";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const SingleCause = () => {
  const [value, setValue] = useState("20");

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    donation_value: "",
  };

  const { values, setFieldValue, errors, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: DonationSchema,
      // setFieldValue
      onSubmit: (values, action) => {
        // console.log(values);
        // action.resetForm();
      },
    });

  useEffect(() => {
    setFieldValue("donation_value", value);
  }, [value]);

  //   const posting = async () => {
  //     try {
  //         const res = await axios.post('http://127.0.0.1:5000/donation', values);
  //         console.log(res.data);
  //     } catch (err) {
  //         // Handle Error Here
  //         console.error(err);
  //     }
  // };
  const makePayment = async () => { 
    const stripe = await loadStripe("pk_test_51NegSBSBCLWmEAOtziJd9V6ia7JzWhcb2eo6ueMmyndi75cEbZyCM6PTlICLNLoMjGifZtCecu6ZpA0zFDjNxzf300Bm4aIrAK"); 
    const body = values; 
    const headers = { 
      "Content-Type": "application/json", 
    }; 
 
    const response = await fetch( 
      "http://localhost:5000/donation", 
      { 
        method: "POST", 
        headers: headers, 
        body: JSON.stringify(values), 
      } 
    ); 
 
    const session = await response.json(); 
    
 
    const result = stripe.redirectToCheckout({ 
      sessionId: session.id, 
      
    }); 
 
    if (result.error) { 
      console.log(result.error); 
    } 
  };

  return (
    <div>
      <div className=" sticky top-0 transition-all ease-in z-50">
        <Navbar />
      </div>
      <div className=" grid grid-cols-7 px-40 py-32 gap-4">
        <div className=" col-span-5   p-2">
          <img src={misvis} alt="" className="h-[110vh] rounded-3xl" />
          {/* content in white space  */}
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

              <div className="py-12">
                <form onSubmit={handleSubmit}>
                  <div className="py-8 border-b-2">
                    <div className=" shadow-slate-300 shadow-md rounded-full px-2 w-80">
                      <span>Rs</span>
                      <span>
                        <input
                          className=" focus:outline-none  p-2 text-lg font-bold"
                          type="text"
                          name="donation_value"
                          id="donation_value"
                          autoComplete="off"
                          value={values.donation_value}
                          // defaultValue={value}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    <div className="flex gap-4  py-4">
                      <div
                        onClick={() => {
                          setValue(20);
                          // setFieldValue('donation_value',value)
                        }}
                        className=" transition-all hover:text-orange-500 border-2 rounded-3xl p-1 px-4 cursor-pointer text-center"
                      >
                        Rs 20
                      </div>
                      <div
                        onClick={() => {
                          setValue(50);
                          // setFieldValue('donation_value',value)
                        }}
                        className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                      >
                        Rs 50
                      </div>
                      <div
                        onClick={() => {
                          setValue(100);
                          // setFieldValue('donation_value',value)
                        }}
                        className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                      >
                        Rs 100
                      </div>
                      <div
                        onClick={() => {
                          setValue(250);
                          // setFieldValue('donation_value',value)
                        }}
                        className="transition-all hover:text-orange-500  border-2 rounded-3xl p-1 px-4 text-center cursor-pointer"
                      >
                        Rs 250
                      </div>
                      <div
                        onClick={() => {
                          setValue(500);
                          // setFieldValue('donation_value',value)
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
                  <div>Personal Info</div>

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
                      // onClick={posting}
                      onClick={makePayment}

              
                      type="submit"
                      value={"donate now"}
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-transparent border-2 hover:text-orange-500 hover:border-2 hover:border-orange-500"
                    />
                    {<div>total donation:{values.donation_value}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* challenge and summary */}
          <div className="px-4 flex flex-col gap-8 py-12">
            <div className="text-3xl text-orange-500 font-semibold">Challenge</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus eaque qui reiciendis cum similique quia omnis facere iusto blanditiis quidem ipsum delectus deserunt quo rerum repellendus magnam modi doloribus eos neque. Ipsum consectetur, inventore sed voluptates excepturi earum reprehenderit?
            </div>
          </div>
          <div className="px-4 flex flex-col gap-8 py-12">
            <div className="text-3xl text-orange-500 font-semibold">Summary</div>
            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni voluptates enim quas doloremque facere sunt ad ipsa eos aspernatur, impedit, neque ratione vel quos quo repudiandae quibusdam, libero perferendis? Nobis, veniam obcaecati quisquam doloribus modi earum magni dolor quidem.</div>
          </div>
        </div>
        <div className="col-span-2 shadow-xl h-fit py-12 px-8 border-t-2 rounded-3xl  gap-8  flex flex-col  ">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-[Yeseva-One] font-semibold text-orange-500">
              Search
            </div>
            <div>
              <input type="text" placeholder="Search" className=" w-full text-lg border-2 p-3 rounded-xl"/>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-[Yeseva-One] font-semibold text-orange-500">
              Categories
            </div>
            <div>
              <ul className=" list-disc text-lg list-inside flex flex-col gap-4 py-2 justify-center ">
                <li>category1</li>
                <li>category2</li>
                <li>category3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleCause;
