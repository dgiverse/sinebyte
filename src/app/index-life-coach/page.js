import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componets/Navbar/navbar";
import CoachCounter from "../componets/coachCounter";
import CoachAbout from "../componets/coachAbout";
import ClientsOne from "../componets/clientsOne";
import Blog from "../componets/blog";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import CookieModal from "../componets/cookieModal";

import { coachServices, cources } from "../Data/data";
import { LuBookOpen } from "react-icons/lu";
import { FiArrowRight, FiClock, FiEye } from "react-icons/fi";

export default function Page() {
  return (
    <>
      <Navbar navClass="nav-light" navJustify="justify-end" />
      <section
        className="relative flex md:h-screen md:py-0 py-36 items-center lg:bg-left-top bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/coach/bg.jpg')" }}
      >
        <div className="container relative z-3">
          <div className="grid grid-cols-1 mt-10">
            <div className="md:text-start text-center">
              <span className="bg-indigo-600 inline-block text-white text-sm font-semibold px-2.5 rounded mb-4">
                Life Coach
              </span>
              <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                Unleash Your Real <br /> Potential and Live <br /> Limitless!
              </h1>
              <p className="text-white/70 text-lg max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  Contact us{" "}
                  <i className="mdi mdi-arrow-right align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Services For My Clients
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with sinebyte that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[24px]">
            {coachServices.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden p-6 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500"
                >
                  <Image
                    src={item.image1}
                    width={64}
                    height={64}
                    className="size-16 mx-auto"
                    alt=""
                  />

                  <div className="content mt-7">
                    <h2 className="title text-xl font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-slate-400 mt-3">{item.desc}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 duration-500">
                    <div className="absolute inset-0">
                      <Image
                        src={item.image2}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        alt=""
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    </div>

                    <div className="absolute bottom-0 start-0 end-0 mb-6">
                      <Link href="#" className="text-white text-xl font-bold">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CoachCounter />
      <section className="relative md:py-24 py-16" id="about">
        <CoachAbout />
        <div className="relative md:mt-24 mt-16">
          <ClientsOne />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Popular Courses
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            {cources.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative rounded-md shadow hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="group-hover:scale-110 duration-500 ease-in-out"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                    <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                      <div className="pb-4 ps-4 flex items-center">
                        <Image
                          src={item.clientImage}
                          width={48}
                          height={48}
                          className="size-12 rounded-full shadow-md dark:shadow-gray-800 mx-auto"
                          alt=""
                        />
                        <div className="ms-3">
                          <Link
                            href="#"
                            className="font-semibold text-white block"
                          >
                            {item.clientName}
                          </Link>
                          <span className="text-white/70 text-sm">
                            {item.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content p-6 relative">
                    <Link
                      href="/course-detail"
                      className="font-medium block text-indigo-600"
                    >
                      {item.name}
                    </Link>
                    <Link
                      href="/course-detail"
                      className="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3 mb-4">{item.desc}</p>

                    <ul className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center list-none text-slate-400">
                      <li className="flex items-center me-4">
                        <LuBookOpen className="text-lg leading-none me-2 text-slate-900 dark:text-white" />
                        <span>{item.lectures}</span>
                      </li>

                      <li className="flex items-center me-4">
                        <FiClock className="text-lg leading-none me-2 text-slate-900 dark:text-white" />
                        <span>{item.time}</span>
                      </li>

                      <li className="flex items-center">
                        <FiEye className="leading-none me-2 text-slate-900 dark:text-white" />
                        <span>{item.view}</span>
                      </li>
                    </ul>

                    <div className="absolute -top-7 end-6 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                      <div className="flex justify-center items-center size-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-indigo-600 dark:text-white">
                        <span className="font-semibold">$11</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <Link
                href="/course-listing"
                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                See All Courses{" "}
                <FiArrowRight className="align-middle ms-1"></FiArrowRight>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-20 w-full table relative bg-top bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/images/coach/cta.jpg")' }}
      >
        <div class="absolute inset-0 bg-slate-900/70"></div>
        <div class="container relative">
          <div class="grid grid-cols-1 text-center">
            <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">
              Self Development Course
            </h3>

            <p class="text-white/80 max-w-xl mx-auto">
              Start working with sinebyte that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>

            <div class="mt-8">
              <a
                href=""
                class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                JOIN FOR FREE
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="relative md:py-24 py-16">
        <div class="container">
          <Blog />
        </div>
      </section>
      <Footer />
      <Switcher />
      <CookieModal />
    </>
  );
}
