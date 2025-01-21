"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./componets/Navbar/navbar";
import Footer from "./componets/Footer/footer";
import CookieModal from "./componets/cookieModal";
import CompanyLogo from "./componets/companyLogo";
import MobileApp from "./componets/mobileApp";
import Switcher from "./componets/switcher";

import { TypeAnimation } from "react-type-animation";
import { accordionData } from "./Data/dataTwo";
import { FaArrowRight, FaRegEnvelope } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

export default function Page() {
  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.add("dark");
    htmlTag.classList.remove("light");
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const priceData = [
    {
      title: "Free",
      desc: "We offers a free month of service for new customers.",
      features: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
      plan: "0",
      btn: "Signup",
    },
    {
      title: "Starter",
      desc: "We offers a free month of service for new customers.",
      features: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
      plan: "9",
      btn: "Buy Now",
    },
    {
      title: "Business",
      desc: "We offers a free month of service for new customers.",
      features: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
      plan: "29",
      btn: "Started now",
    },
  ];
  return (
    <>
      <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
      <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-red-600/20"></span>
      <Navbar />
      <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
        <div
          className="absolute inset-0  bg-repeat opacity-10 dark:opacity-60"
          style={{ backgroundImage: "url('/images/overlay.png')" }}
        ></div>
        <div className="container relative z-1">
          <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-7">
              <div className="lg:me-6 lg:text-start text-center">
                <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-4xl mb-5">
                  Transform Your Enterprise with <br />
                  the
                  <TypeAnimation
                    sequence={[
                      "  Power of  AI",
                      2000,
                      " Power of AI",
                      2000,
                      "   Power  of  AI",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-lg max-w-xl lg:ms-0 mx-auto">
                  Sinebyte empowers you to transform ideas into AI-driven
                  enterprise applications, seamlessly adapting to your business
                  needs.
                </p>

                <div className="subcribe-form mt-6 mb-3">
                  <form className="relative max-w-md mx-auto lg:ms-0">
                    <div className="relative">
                      <FaRegEnvelope className="me-2 text-base  absolute top-4 left-5" />
                      <input
                        type="email"
                        id="aiemail"
                        name="email"
                        className="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800"
                        placeholder="support@sinebyte.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:size-[36rem] after:border-2 after:border-dashed after:border-slate-200 dark:after:border-slate-700 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-200 dark:before:border-slate-700 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
                <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-40 after:size-[36rem] after:bg-gradient-to-tl after:to-indigo-600/30  after:from-red-600/30 dark:after:to-indigo-600/50 dark:after:from-red-600/50 after: after:blur-[200px] after:rounded-full after:-z-1">
                  <Image
                    src="/images/light-dash.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="/images/light-dash.png"
                    style={{ width: "1175px", height: "auto" }}
                    className="lg:max-w-none lg:ms-14"
                    alt="sinebyte dash"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      <section className="relative md:pb-24 pb-16 overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <div className="flex items-center justify-center rounded-full mx-auto bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 size-[110px]">
              <Image
                src="/images/logo.svg"
                width={66}
                height={66}
                className="block mx-auto"
                alt="Sinebyte logo"
              />
            </div>
            <h1 className="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
              Leading AI Platform for Enterprise Application in
              <br />{" "}
              <span className="after:absolute after:end-0  after:start-0  after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">
                Digital Tranformation.
              </span>
            </h1>

            <p
              className="text-slate-2
            00 max-w-xl mx-auto"
            >
              Empower your team with the Sinebyte AI Platform, equipped with
              advanced enterprise AI capabilities. Easily create custom apps to
              drive innovation, streamline efficiency, and stay ahead in a
              rapidly changing business world.
            </p>
          </div>

          <div className="grid mt-8">
            <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
              <video autoPlay muted loop>
                <source src="/images/modern.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6">
        {/* <div className="container relative">
          <CompanyLogo />
        </div> */}
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Sinebyte Platform : Empowering Enterprises with AI
            </h3>

            <p className="text-slate-400 max-w-xl">
              Sinebyte harnesses AI to drive efficiency, innovation, and
              customer satisfaction. Our platform addresses key enterprise needs
              with cutting-edge solutions:
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 shadow shadow-gray-300 dark:shadow-gray-500 rounded-lg md:divide-x-[1px] divide-y-[1px] divide-gray-200 dark:divide-gray-700">
            <div className="relative p-6 md:p-8">
              <i className="mdi mdi-account-search-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

              <h5 className="text-xl font-semibold my-5">
                Data Management and Analytics
              </h5>

              <p className="text-slate-400">
                Sinebyte transforms data into actionable insights with
                predictive analytics and real-time dashboards. We streamline
                data handling, enabling smarter decisions and optimized
                operations for competitive advantage.
              </p>

              <MdKeyboardArrowRight className="size-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1" />
            </div>

            <div className="relative p-6 md:p-8">
              <i className="mdi mdi-wallet-bifold-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

              <h5 className="text-xl font-semibold my-5">Process Automation</h5>

              <p className="text-slate-400">
                Simplify operations with Sinebyte’s AI-driven automation. Our
                RPA and IDP solutions handle tasks like invoicing and
                compliance, cutting costs and freeing teams for strategic
                priorities.
              </p>

              <MdKeyboardArrowRight className="size-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1" />
            </div>

            <div className="relative p-6 md:p-8">
              <i className="mdi mdi-home-plus-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

              <h5 className="text-xl font-semibold my-5">
                Enhanced Customer Interaction
              </h5>

              <p className="text-slate-400">
                Sinebyte’s AI tools—chatbots, virtual assistants, and
                recommendation engines—deliver personalized customer
                experiences. From 24/7 support to sentiment insights, we help
                build loyalty and exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:ps-12 ps-8 lg:pt-12 pt-8 lg:me-8">
              <Image
                src="/images/dataform.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="ltr:rounded-tl-lg rtl:rounded-tr-lg"
                alt="dataform"
              />
            </div>

            <div className="">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                AI-Driven Data Analytics & Insights
              </h3>
              <p className="text-slate-400 max-w-xl">
                AI-driven data analytics transforms raw data into powerful
                insights. By uncovering hidden patterns and delivering real-time
                intelligence, it empowers businesses to make data-driven
                decisions that fuel growth and drive a competitive advantage.
              </p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Predictive analytics drive smarter decisions.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  AI automation boosts efficiency.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Personalized insights enhance customer experience.
                </li>
              </ul>

              {/* <div className="mt-4">
                <Link
                  href="#"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="ms-1 text-lg" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:pe-12 pe-8 lg:pt-12 pt-8 lg:ms-8">
                <Image
                  src="/images/process.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="ltr:rounded-tl-lg rtl:rounded-tr-lg"
                  alt="dataform"
                />
                {/* <img
                  src="/images/process.gif"
                  alt="loading..."
                  style={{ width: "100%", height: "auto" }}
                  className="ltr:rounded-tr-lg rtl:rounded-tl-lg"
                /> */}
                {/* <img
                  src="/images/process.gif"
                  alt="Description of the image"
                  style={{ width: "100%", height: "auto" }}
                  className="ltr:rounded-tr-lg rtl:rounded-tl-lg"
                /> */}
              </div>
            </div>

            <div className="order-2 md:order-1">
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Predictive Modeling For Decision Making
              </h4>
              <p className="text-slate-400">
                Elevate your business with Sinebyte AI platform, simplifying
                predictive modeling with intuitive tools and real-time insights.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Leverage advanced techniques for smarter.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  Faster decisions.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Explore Sinebyte AI solutions now!
                </li>
              </ul>

              {/* <div className="mt-4">
                <Link
                  href="#"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="ms-1 text-lg" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:ps-12 ps-8 lg:pt-12 pt-8 lg:me-8">
              <Image
                src="/images/keyword.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="ltr:rounded-tl-lg rtl:rounded-tr-lg"
                alt="app"
              />
            </div>

            <div className="">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Keyword Extraction
              </h3>
              <p className="text-slate-400 max-w-xl">
                Sinebyte empowers businesses to unlock actionable insights from
                diverse data sources using AI and NLP. By leveraging advanced
                technologies.
              </p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  We uncover critical patterns and trends.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Enabling smarter decision-making.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Significantly enhancing operational efficiency.
                </li>
              </ul>

              {/* <div className="mt-4">
                <Link
                  href="#"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="ms-1 text-lg" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:pe-12 pe-8 lg:pt-12 pt-8 lg:ms-8">
                <Image
                  src="/images/workflow.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="ltr:rounded-tr-lg rtl:rounded-tl-lg"
                  alt="analytics"
                />
              </div>
            </div>

            <div className="order-2 md:order-1">
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Automation of workflows and processes
              </h4>
              <p className="text-slate-400">
                AI-powered automation streamlines workflows and processes by
                eliminating repetitive tasks and reducing manual effort. It
                enhances efficiency, accuracy, and scalability, allowing teams
                to focus on high-value activities.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Enhances workflows, reducing time and effort required for
                  tasks.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  Improves precision, minimizing errors and inconsistencies.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                  Supports growth by enabling teams to handle larger workloads
                  without compromising quality.
                </li>
              </ul>

              {/* <div className="mt-4">
                <Link
                  href="#"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="ms-1 text-lg" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
            <div className="lg:col-span-8 md:col-span-12">
              <div className="grid grid-cols-1 pb-8">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  Top Enterprise AI Use Cases Across Industries
                </h3>

                <p className="text-slate-400 max-w-xl">
                  With Sinebyte, leverage AI to innovate, streamline, and excel.
                  Partner with us to unlock growth and new possibilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                  <span className="mdi mdi-flip-horizontal text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>

                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Predictive Maintenance (Manufacturing)
                    </Link>
                    <p className="text-slate-400 mt-3">
                      AI-driven models analyze equipment data to predict
                      failures, reducing downtime and maintenance costs.
                    </p>

                    {/* <div className="mt-5">
                      <Link
                        href="#"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                  <span className="mdi mdi-email-edit-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>

                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Personalized Marketing (Retail)
                    </Link>
                    <p className="text-slate-400 mt-3">
                      AI tools provide personalized recommendations and targeted
                      promotions, boosting customer engagement and sales.
                    </p>

                    {/* <div className="mt-5">
                      <Link
                        href="#"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                  <span className="mdi mdi-star-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Fraud Detection (Finance)
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Machine learning algorithms detect anomalies in
                      transactions, minimizing risks and preventing financial
                      fraud.
                    </p>

                    {/* <div className="mt-5">
                      <Link
                        href="#"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                  <span className="mdi mdi-bookmark-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Demand Forecasting (Supply Chain)
                    </Link>
                    <p className="text-slate-400 mt-3">
                      AI-powered analytics optimize inventory management and
                      predict demand fluctuations, ensuring supply chain
                      efficiency.
                    </p>

                    {/* <div className="mt-5">
                      <Link
                        href="#"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12">
              <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                  <span className="mdi mdi-account-check-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Virtual Health Assistants (Healthcare)
                    </Link>
                    <p className="text-slate-400 mt-3">
                      AI chatbots and assistants provide 24/7 patient support,
                      schedule management, and preliminary diagnosis guidance.
                    </p>

                    {/* <div className="mt-5">
                      <Link
                        href="#"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                  <span className="mdi mdi-comment-multiple-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Talent Acquisition (Human Resources)
                    </Link>
                    <p className="text-slate-400 mt-3">
                      AI streamlines recruitment by analyzing resumes,
                      automating candidate matching, and predicting employee
                      success.
                    </p>

                    {/* <div className="mt-5">
                      <Link
                        href="#"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What Our Users Say
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div> */}

        {/* <div className="container-fluid relative overflow-hidden">
          <div className="grid grid-cols-1 mt-8">
            <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
              <div className="slide-track flex items-center">
                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I didnt know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just dont do at all with sinebyte.
                          Suspicious but I can not say I dont love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about sinebyte is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/04.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU and with
                          sinebyte I somehow dont have to do that anymore.
                          Nervous to travel there now though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth emailIvesent to your support team.
                          I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/06.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I didnt know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/07.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just dont do at all with sinebyte.
                          Suspicious but I can not say I dont love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/08.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about sinebyte is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU and with
                          sinebyte I somehow dont have to do that anymore.
                          Nervous to travel there now though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth emailIvesent to your support team.
                          I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/04.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I didnt know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just dont do at all with sinebyte.
                          Suspicious but I can not say I dont love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/06.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about sinebyte is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/07.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/08.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU and with
                          sinebyte I somehow dont have to do that anymore.
                          Nervous to travel there now though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth emailIvesent to your support team.
                          I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I didnt know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just dont do at all with sinebyte.
                          Suspicious but I can not say I dont love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about sinebyte is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/07.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU and with
                          sinebyte I somehow dont have to do that anymore.
                          Nervous to travel there now though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/07.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth emailIvesent to your support team.
                          I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/08.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I didnt know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just dont do at all with sinebyte.
                          Suspicious but I can not say I dont love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about sinebyte is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/04.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU and with
                          sinebyte I somehow dont have to do that anymore.
                          Nervous to travel there now though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth emailIvesent to your support team.
                          I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/06.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I didnt know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/07.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just dont do at all with sinebyte.
                          Suspicious but I can not say I dont love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/08.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about sinebyte is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU and with
                          sinebyte I somehow dont have to do that anymore.
                          Nervous to travel there now though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image
                          src="/images/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow dark:shadow-gray-800"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth emailIvesent to your support team.
                          I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container relative md:mt-24 mt-16">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
            <div className="lg:col-span-4 md:mb-0 mb-8">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Frequently Asked Questions
              </h3>

              {/* <p className="text-slate-400 max-w-xl mx-auto mb-6">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p> */}

              <Link
                href="/contactus"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full"
              >
                Contact Us
              </Link>
            </div>

            <div className="lg:col-span-8 md:mt-0 mt-8" id="accordion-collapse">
              {accordionData.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                >
                  <h2
                    className="text-base font-semibold"
                    id="accordion-collapse-heading-1"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                        activeIndex === index
                          ? "bg-gray-50 dark:bg-slate-800 text-indigo-600"
                          : ""
                      }`}
                    >
                      <span>{item.title}</span>
                      <svg
                        data-accordion-icon
                        className={`${
                          activeIndex === index ? "rotate-180" : "rotate-270"
                        } size-4 shrink-01`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  {activeIndex === index && (
                    <div
                      id="accordion-collapse-body-1"
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <Link
                  href="/faqs"
                  className="relative inline-flex items-right font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  For More <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Our Pricing Plans
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind css html page.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-8 gap-[30px]">
            {priceData.map((item, index) => {
              return (
                <div
                  className="group md:flex items-center justify-between p-6 rounded-lg shadow dark:shadow-gray-700"
                  key={index}
                >
                  <div className="lg:flex items-center justify-between lg:w-2/4">
                    <div className="lg:mb-0 mb-5">
                      <h5 className="text-2xl font-semibold">{item.title}</h5>
                      <p className="text-slate-400 lg:w-[200px] md:w-[300px] mt-2">
                        {item.desc}
                      </p>
                    </div>

                    <ul className="list-none text-slate-400 md:mb-0 mb-5">
                      {item.features.map((el, index) => {
                        return (
                          <li key={index} className="mb-1 flex items-center">
                            <BsCheckCircle className="text-indigo-600 text-base me-2" />{" "}
                            {el}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="flex md:mb-0 mb-5">
                    <span className="text-xl font-semibold">$</span>
                    <span className="price text-4xl font-semibold mb-0">
                      {item.plan}
                    </span>
                    <span className="text-xl font-semibold self-end mb-1">
                      /mo
                    </span>
                  </div>

                  <Link
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full"
                  >
                    {item.btn}
                  </Link>
                </div>
              );
            })}
          </div>
        </div> */}
        {/* <MobileApp /> */}
      </section>
      <Footer />
      {/* <CookieModal /> */}
      <Switcher />
    </>
  );
}
