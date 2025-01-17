import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componets/Navbar/navbar";
import CompanyLogo from "../componets/companyLogo";
import Counter from "../componets/AboutUs/counter";
import VideoModal from "../componets/videoModal/videoModal";
import PricingOne from "../componets/pricingOne";
import ClientsOne from "../componets/clientsOne";
import Blog from "../componets/blog";
import MobileApp from "../componets/mobileApp";
import Footer from "../componets/Footer/footer";
import CookieModal from "../componets/cookieModal";
import Switcher from "../componets/switcher";

import { featureFive } from "../Data/data";
import { FiChevronRight, FiHexagon } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <Navbar />
      <section
        className="relative md:pt-44 py-36 bg-slate-50 dark:bg-slate-800"
        id="home"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center text-center">
            <div className="">
              <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize mb-5">
                Qualified Business Consultancy
              </h1>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>

              <div className="subcribe-form mt-6 mb-3">
                <form className="relative max-w-xl mx-auto">
                  <input
                    type="email"
                    id="emailid"
                    name="email"
                    className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800"
                    placeholder="yourname@domain.com"
                  />
                  <button
                    type="submit"
                    className="absolute top-[2px] end-[3px] h-[46px] py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              <span className="font-medium">
                Looking for help?{" "}
                <Link href="" className="text-indigo-600">
                  Get in touch with us
                </Link>
              </span>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mx-auto mt-8 items-center">
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="">
                    <div className="grid grid-cols-1 gap-4">
                      <Image
                        src="/images/cowork/1.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="">
                    <div className="grid grid-cols-1 gap-4">
                      <Image
                        src="/images/cowork/10.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-lg"
                        alt=""
                      />
                      <Image
                        src="/images/cowork/2.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <Image
                  src="/images/business/bg02.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="shadow rounded-lg"
                  alt=""
                />
              </div>

              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="">
                    <div className="grid grid-cols-1 gap-4">
                      <Image
                        src="/images/cowork/4.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-lg"
                        alt=""
                      />
                      <Image
                        src="/images/cowork/9.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="">
                    <div className="grid grid-cols-1 gap-4">
                      <Image
                        src="/images/cowork/5.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="shadow rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-gray-100 dark:border-gray-700">
        <div className="container relative">
          <CompanyLogo />
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <Image
                      src="/images/about/ab03.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shadow rounded-md"
                      alt=""
                    />
                    <Image
                      src="/images/about/ab02.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <Image
                      src="/images/about/ab01.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <Counter />
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                  Who we are ?
                </h3>

                <p className="text-slate-400 max-w-xl">
                  Start working with Tailwind CSS that can provide everything
                  you need to generate awareness, drive traffic, connect. Dummy
                  text is text that is used in the publishing industry or by web
                  designers to occupy the space which will later be filled with
                  real content.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact-one"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                  >
                    <FaRegEnvelope className="me-2 text-sm" /> Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What we do ?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Create, collaborate, and turn your ideas into incredible products
              with the definitive platform for digital design.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {featureFive.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <FiHexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></FiHexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                      <Icons className=""></Icons>
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

      <section className="relative md:py-24 py-16 md:pt-0 pt-0">
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="relative">
                    <Image
                      src="/images/cta-bg.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-md shadow-lg"
                      alt=""
                    />
                    <VideoModal />
                  </div>
                </div>
              </div>
              <div className="content md:mt-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <h6 className="text-white/50 text-lg font-semibold">
                            Team
                          </h6>
                          <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                            Meet Experience <br /> Team Member
                          </h3>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <p className="text-white/50 max-w-xl mx-auto mb-2">
                            Start working with sinebyte that can provide
                            everything you need to generate awareness, drive
                            traffic, connect.
                          </p>
                          <Link
                            href=""
                            className="text-white inline-flex items-center"
                          >
                            Read More{" "}
                            <FiChevronRight className="align-middle ms-1"></FiChevronRight>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
      </section>

      <section className="relative md:pb-24 pb-16">
        <PricingOne />
        <div className="md:mt-24 mt-16">
          <ClientsOne />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <Blog />
        </div>
        <MobileApp />
      </section>

      <Footer />
      <CookieModal />
      <Switcher />
    </>
  );
}
