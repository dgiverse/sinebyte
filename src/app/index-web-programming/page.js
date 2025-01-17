"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Navbar from "../componets/Navbar/navbar";
import CompanyLogo from "../componets/companyLogo";

import { TypeAnimation } from "react-type-animation";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import Image from "next/image";

import {
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiHexagon,
} from "react-icons/fi";
import { MdOutlineCheckCircle } from "react-icons/md";

import CountUp from "react-countup";
import { webServices, faqData } from "../Data/dataFive";
import Blog from "../componets/blog";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import CookieModal from "../componets/cookieModal";

export default function Page() {
  let [isOpen, setOpen] = useState(false);
  let [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.add("dark");
    htmlTag.classList.remove("light");
  });

  return (
    <>
      <Navbar />

      <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
        <span className="absolute blur-[200px] size-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/50"></span>
        <div className="container relative z-1">
          <div className="grid md:grid-cols-2 items-center gap-[30px]">
            <div className="">
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-black dark:text-white relative">
                Hellow! <br /> We Are A{" "}
                <span className="after:absolute after:end-0 after:start-0 after:bottom-4 after:lg:h-4 after:h-3 after:w-auto after:bg-indigo-600/30 relative text-indigo-600">
                  <TypeAnimation
                    sequence={[
                      "Talented",
                      1000,
                      "Creative",
                      1000,
                      "Skilled",
                      1000,
                    ]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                    className="typewrite"
                    cursor={false}
                  ></TypeAnimation>
                </span>
                <br /> Programmer.
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>

              <div className="relative mt-8">
                <Link
                  href="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2"
                >
                  Learn More
                </Link>
                <Link
                  href="#!"
                  onClick={() => setOpen(true)}
                  className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"
                >
                  <i className="mdi mdi-play text-xl align-middle"></i>
                </Link>
                <small className="text-sm font-semibold uppercase align-middle ms-2">
                  Watch Now
                </small>
              </div>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="S_CGed6E610"
                onClose={() => setOpen(false)}
              />
            </div>
            <div className="relative">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-full md:w-3/4">
                  <Image
                    src="/images/vector01.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl to-indigo-600/30 from-yellow-600/30"></div>
                </div>
              </div>

              <div className="absolute -top-8 start-0 mover">
                <Image
                  src="/images/programming/1.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-2xl"
                  alt=""
                />
              </div>

              <div className="absolute -bottom-8 end-0 mover-2">
                <Image
                  src="/images/programming/2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div className="container relative">
          <CompanyLogo />
        </div>
      </section>

      <section className="relative md:py-24 py-16 overflow-hidden">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative">
              <div className="relative">
                <Image
                  src="/images/programming/3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="mx-auto md:max-w-xs lg:max-w-sm rounded-lg shadow-md dark:shadow-gray-800"
                  alt=""
                />

                <div className="absolute top-4 md:start-12 -start-2 text-center">
                  <Link
                    href="#!"
                    scroll={false}
                    onClick={() => setOpen(true)}
                    className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

              <div className="absolute flex justify-between items-center bottom-10 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                  <FiCode className="size-6" />
                </div>
                <div className="flex-1">
                  <h6 className="text-slate-400">Lines of Code</h6>
                  <p className="text-xl font-bold">
                    <CountUp className="counter-value" end="45485" />
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:ms-8">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                Professional Developing & <br /> Programming Services <br /> You
                Can Trust!
              </h3>
              <p className="text-slate-400 max-w-xl">
                You can combine all the sinebyte templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 ms-0 flex align-middle">
                  <MdOutlineCheckCircle className=" text-indigo-600 text-xl me-2" />
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li className="mb-2 ms-0 flex align-middle">
                  <MdOutlineCheckCircle className=" text-indigo-600 text-xl me-2" />
                  Our Talented & Experienced Marketing Agency
                </li>
                <li className="mb-2 ms-0 flex align-middle">
                  <MdOutlineCheckCircle className=" text-indigo-600 text-xl me-2" />
                  Create your own skin to match your brand
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/page-aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Find Out More <FiChevronRight className="align-middle" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Services of Programmer
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {webServices.map((item, index) => {
              let Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <FiHexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></FiHexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                      <Icon className="" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-lg font-medium group-hover:text-white duration-500"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 w-full table relative bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/programming/bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl to-indigo-600/75 from-yellow-600/75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-4xl text-3xl text-white font-semibold">
              We Are A Talented Developer or Programmer.
            </h3>

            <p className="text-white/70 max-w-xl mx-auto">
              Start working with sinebyte that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>

            <Link
              href="#!"
              scroll={false}
              onClick={() => setOpen(true)}
              className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10"
            >
              <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Frequently Asked Questions
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]"
          >
            <div>
              {faqData.slice(0, 4).map((item, index) => {
                return (
                  <div
                    className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mb-3"
                    key={index}
                  >
                    <h2 className="text-base font-semibold">
                      <button
                        type="button"
                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                          activeTab === item.id
                            ? "bg-gray-50 dark:bg-slate-800 text-indigo-600"
                            : ""
                        }`}
                        onClick={() => setActiveTab(item.id)}
                      >
                        <span>{item.title}</span>
                        <FiChevronDown
                          className={`size-4 shrink-0 ${
                            activeTab === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h2>
                    <div className={activeTab === item.id ? "" : "hidden"}>
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              {faqData.slice(4, 8).map((item, index) => {
                return (
                  <div
                    className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mb-3"
                    key={index}
                  >
                    <h2 className="text-base font-semibold">
                      <button
                        type="button"
                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                          activeTab === item.id
                            ? "bg-gray-50 dark:bg-slate-800 text-indigo-600"
                            : ""
                        }`}
                        onClick={() => setActiveTab(item.id)}
                      >
                        <span>{item.title}</span>
                        <FiChevronDown
                          className={`size-4 shrink-0 ${
                            activeTab === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h2>
                    <div className={activeTab === item.id ? "" : "hidden"}>
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Blog className="container relative md:mt-24 mt-16" />
      </section>

      <Footer />
      <Switcher />
      <CookieModal />
    </>
  );
}
