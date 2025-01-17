"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Ensure you are importing the useRouter hook
import Link from "next/link";
import Switcher from "../componets/switcher";
import Image from "next/image";
import axios from "axios";
import getEnvConfig from "../componets/getenv";

export default function Page() {
  const [subDomain, setSubDomain] = useState("");
  const [email, setemail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const validateEmail = (email) => {
    const restrictedDomains = [
      "gmail.com",
      "ymail.com",
      "outlook.com",
      "live.com",
      "hotmail.com",
      "yahoo.com",
      "yahoo.co.in",
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    const domain = email.split("@")[1];
    return !restrictedDomains.includes(domain);
  };

  const Login = (e) => {
    e.preventDefault();
    if (subDomain !== "" && email !== "" && password !== "") {
      if (!validateEmail(email)) {
        setEmailCheck(true);
        return;
      }
      setIsLoading(true);
      axios
        .post(`${getEnvConfig()}/api/user/login`, {
          subdomain_name: subDomain,
          email: email,
          password,
        })
        .then((response) => {
          if (response) {
            localStorage.setItem("authToken", response.data.result.accessToken);
            router.push("/docs");
          }
          // setEmailCheck(false);
          // setLoginError(false);
          // console.log("Login successful, response:", response);
          // localStorage.setItem("authToken", response.data.token);

          // if (localStorage.getItem("authToken")) {
          //   router.push("/docs");
          // }
        })
        .catch((error) => {
          setLoginError(true);
        })
        .finally(() => {
          setIsLoading(false); // Reset loading state after the request is finished
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(e); // Call Login function
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link href="/">
                <Image
                  src="/images/logo-icon-64.png"
                  height={64}
                  width={72}
                  className="mx-auto"
                  alt="Sinebyte Logo"
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                    <div className="relative bg-inherit">
                      <input
                        id="subdomain_name"
                        type="text"
                        className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                        placeholder="Enter Your Business Name"
                        required
                        onChange={(e) => setSubDomain(e.target.value)}
                      />
                      <label
                        htmlFor="businessname"
                        className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                      >
                        Business Name
                      </label>
                    </div>
                  </div>
                  <br />

                  <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                    <div className="relative bg-inherit">
                      <input
                        id="email"
                        type="text"
                        className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                        placeholder="Enter Your Business Email"
                        required
                        onChange={(e) => {
                          const emailInput = e.target.value;
                          setemail(emailInput);
                          setEmailCheck(!validateEmail(emailInput));
                        }}
                      />
                      <label
                        htmlFor="businessname"
                        className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-00 dark:peer-focus:border-indigo-600"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  {emailCheck && (
                    <p className="text-red-600 text-xs mb-2">
                      Please provide a valid business email address.
                    </p>
                  )}
                  <br />

                  <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                    <div className="relative bg-inherit">
                      <input
                        id="Password"
                        type="password"
                        className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                        htmlFor="businessname"
                        className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                      >
                        Password
                      </label>
                    </div>
                  </div>
                  {loginError && (
                    <p className="text-red-500">
                      Invalid credentials. Please try again.
                    </p>
                  )}

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full py-2 px-3 bg-indigo-600 text-white rounded-md"
                      disabled={isLoading} // Disable the button when loading
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </>
  );
}
