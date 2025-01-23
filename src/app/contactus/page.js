"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import countryCodes from "country-codes-list";
import getEnvConfig from "../componets/getenv";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";

import * as Icon from "react-feather";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";

import { contactData } from "../Data/dataTwo";

export default function Page() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [briefbusinessrequirement, setBriefBusinessrequirement] = useState("");
  const [allFieldsCheck, setAllFieldsCheck] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");

  const router = useRouter();

  const countryCodeList = countryCodes.customList(
    "countryCode",
    "+{countryCallingCode} ({countryNameEn})"
  );

  const countryNameByCode = countryCodes.customList(
    "countryCallingCode",
    "{countryNameEn}"
  );

  function validateEmail(email) {
    const restrictedDomains = [
      "gmail.com",
      "ymail.com",
      "outlook.com",
      "live.com",
      "hotmail.com",
    ];

    // Ensure email is valid and normalize it
    if (!email || !email.includes("@")) {
      return false;
    }

    email = email.trim().toLowerCase();
    const emailParts = email.split("@");

    if (emailParts.length < 2) {
      return false; // Invalid format
    }

    const emailDomain = emailParts[1];
    return !restrictedDomains.includes(emailDomain);
  }

  function Submit(e) {
    e.preventDefault();
    if (
      name != "" &&
      businessEmail != "" &&
      phone != "" &&
      companyName != "" &&
      country != "" &&
      briefbusinessrequirement != ""
    ) {
      setAllFieldsCheck(true);
      if (!validateEmail(businessEmail)) {
        // console.log("Invalid business email:", businessEmail); // Debugging statement
        setEmailCheck(true); // Show error
        return;
      }
      setEmailCheck(false);

      axios
        .post(`${getEnvConfig()}/site/lead/contactus`, {
          name: name,
          business_email: businessEmail,
          mobile: phone,
          company_name: companyName,
          country: country,
          brief_business_requirement: briefbusinessrequirement,
        })
        .then(function (response) {
          // handle success
          //console.log(response);
          setEmailCheck(false);
          setSuccessMessage(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error.response.data.message);
          if (error.response.data.message == "Email is required") {
            setEmailCheck(true);
          }
        });
    }
  }
  // console.log(name);
  // console.log(businessEmail);
  // console.log(phone);
  // console.log(companyName);
  // console.log("country is", country);
  // console.log(briefbusinessrequirement);

  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36  bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/company/aboutus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Contact Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Sinebyte</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
            {contactData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div key={index} className="text-center px-6 mt-6">
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icons className="w-7 h-7" />
                  </div>

                  <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-5">
                      <a
                        href="mailto:muru@dgiverse.com,kris@dgiverse.com"
                        className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        {item.contact1}
                      </a>
                    </div>
                    <div className="mt-5">
                      <a
                        href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu,+India/@13.078316,80.26046,13z/data=!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0843007!4d80.2704622!16zL20vMGM4dGs?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        {item.contact}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/images/contact.svg"
                alt=""
              />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Name"
                              required
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label
                            htmlFor="business_email"
                            className="font-semibold"
                          >
                            Business Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                            <input
                              name="businessemail"
                              id="business_email"
                              type="email"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Business Email"
                              required
                              onChange={(e) => {
                                setBusinessEmail(e.target.value);
                              }}
                            />
                            {emailCheck && (
                              <p className="text-red-600 text-xs">
                                Please provide a business email (not from Gmail,
                                Ymail, Outlook, Live, or Hotmail)
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="mobile" className="font-semibold">
                          Phone :
                        </label>
                        <div className="form-icon relative mt-2 flex items-center gap-2">
                          <select
                            id="countryCode"
                            name="countryCode"
                            className="form-input w-20 py-2 px-2 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600"
                            value={selectedCountryCode}
                            onChange={(e) => {
                              const selectedLabel = e.target.value;

                              const [countryCode, countryNameWithParentheses] =
                                selectedLabel.split(" ");

                              const countryName =
                                countryNameWithParentheses.replace(/[()]/g, "");

                              // console.log("Country Name:", countryName);

                              setSelectedCountryCode(selectedLabel);
                              setCountry(countryName);
                            }}
                          >
                            {Object.entries(countryCodeList).map(
                              ([code, label]) => {
                                return (
                                  // Return the JSX
                                  <option
                                    // onChange={(e) => {
                                    //   console.log(e.target.value);
                                    // }}
                                    key={code}
                                    value={label}
                                  >
                                    {label}{" "}
                                  </option>
                                );
                              }
                            )}
                          </select>
                          <input
                            name="phone"
                            id="mobile"
                            type="text"
                            className="form-input ps-4 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Phone"
                            required
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="country" className="font-semibold">
                          Country :
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.Map className="size-4 absolute top-3 start-4"></Icon.Map>
                          <input
                            name="countryname"
                            id="country"
                            type="text"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="company_name" className="font-semibold">
                          Company Name :
                        </label>
                        <div className="form-icon relative mt-2">
                          <IoBusiness className="size-4 absolute top-3 start-4"></IoBusiness>
                          <input
                            name="companyname"
                            id="company_name"
                            type="text"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Company Name"
                            required
                            onChange={(e) => {
                              setCompanyName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label
                          htmlFor="brief_business_requirment"
                          className="font-semibold"
                        >
                          Brief Business Requirement :
                        </label>
                        <div className="form-icon relative mt-2">
                          <FiMessageCircle className="size-4 absolute top-3 start-4"></FiMessageCircle>
                          <textarea
                            name="briefbusinessrequirment"
                            id="brief_business_requirment"
                            className="form-input ps-11 w-full py-2 px-3 h-32 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Brief Business Requirement"
                            required
                            onChange={(e) => {
                              setBriefBusinessrequirement(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        Submit(e);
                      }}
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {successMessage && (
          <div className="grid grid-cols-1 gap-[30px]">
            {/* <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900"> */}
            {/* <div className="p-5 border-t border-gray-100 dark:border-slate-800"> */}
            <div
              className={`bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center ${
                successMessage ? "" : "hidden"
              }`}
            >
              <div className="relative w-full h-auto max-w-lg p-4">
                <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSuccessMessage(!successMessage);
                      router.push("/");
                      // setEmail("");
                    }}
                    className="absolute -top-4 -end-4 text-indigo-600 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="p-6 py-10 text-center">
                    <div className="relative overflow-hidden text-transparent -m-3 text-indigo-600">
                      {/* <Icon.Hexagon className="size-32 fill-red-600/5 mx-auto"></Icon.Hexagon> */}
                      {/* <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-red-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center"> */}
                      {/* <BsHeartbreak /> */}
                      {/* </div> */}
                    </div>

                    <h4 className="text-xl text-indigo-600 font-semibold mt-6">
                      Thank You For Contacting Us!
                    </h4>
                    <p>We Will Get Back To You Soon.</p>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        )}
      </section>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="google"
              src="https://maps.google.com/maps?q=chennai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ border: 0 }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
}
