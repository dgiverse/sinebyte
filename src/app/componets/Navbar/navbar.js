"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuSettings } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";

export default function Navbar(props) {
  let { navClass, navJustify } = props;
  let [isMenu, setisMenu] = useState(false);

  let [manu, setManu] = useState("");
  let pathname = usePathname();

  useEffect(() => {
    setManu(pathname);

    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar !== null) {
          navbar?.classList.add("nav-sticky");
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove("nav-sticky");
        }
      }
    }
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [setManu]);

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <nav
      id="topnav"
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      }`}
    >
      <div className="container relative">
        {navClass === "nav-light" ? (
          <Link className="logo" href="/index">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-dark.svg"
                className="l-dark"
                width={168}
                height={34}
                alt=""
              />
              <Image
                src="/images/logo-light.svg"
                className="l-light"
                width={168}
                height={34}
                alt=""
              />
            </span>
            <Image
              src="/images/logo-light.svg"
              width={168}
              height={34}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        ) : (
          <Link className="logo" href="/index">
            <Image
              src="/images/logo-dark.svg"
              width={168}
              height={34}
              className="inline-block dark:hidden"
              alt=""
            />
            <Image
              src="/images/logo-light.svg"
              width={168}
              height={34}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        {/* {navClass !== "nav-light" ? (
          <ul className={`buy-button list-none space-x-1 mb-0`}>
            <li className="inline mb-0">
              <Link
                href="#"
                className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"
              >
                <LuSettings className="size-4" />
              </Link>
            </li>

            <li className="inline ps-1 mb-0">
              <Link
                href="https://1.envato.market/sinebyte-next"
                target="_blank"
                className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
              >
                <BsCart3 className="size-4" />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="buy-button list-none space-x-1 mb-0">
            <li className="inline mb-0">
              <Link href="#">
                <span className="login-btn-primary">
                  <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">
                    <LuSettings className="size-4" />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <LuSettings className="size-4" />
                  </span>
                </span>
              </Link>
            </li>

            <li className="inline ps-1 mb-0">
              <Link
                href="https://1.envato.market/sinebyte-next"
                target="_blank"
              >
                <div className="login-btn-primary">
                  <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">
                    <BsCart3 className="size-4" />
                  </span>
                </div>
                <div className="login-btn-light">
                  <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <BsCart3 className="size-4" />
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        )} */}

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className={`navigation-menu ${navClass} ${navJustify}`}>
            <li className={manu === "/" || "" ? "active" : ""}>
              <Link href="/" className="sub-menu-item">
                Home
              </Link>
            </li>

            <li
              className={`${
                ["/features"].includes(manu) ? "active" : ""
              } has-submenu parent-parent-menu-item`}
            >
              <Link href="/features">Features</Link>
            </li>

            <li
              className={`${
                ["/pricing"].includes(manu) ? "active" : ""
              } has-submenu parent-parent-menu-item`}
            >
              <Link href="/pricing">Pricing</Link>
              {/* <span className="menu-arrow"></span> */}
            </li>

            <li
              className={`${
                ["/blog"].includes(manu) ? "active" : ""
              } has-submenu parent-parent-menu-item`}
            >
              <Link href="/blog">Blog</Link>
              {/* <span className="menu-arrow"></span> */}
            </li>

            <li
              className={`${
                ["/aboutus"].includes(manu) ? "active" : ""
              } has-submenu parent-menu-item`}
            >
              <Link href="/aboutus">About Us</Link>
              {/* <span className="menu-arrow"></span> */}
            </li>

            <li className={manu === "/contact-one" || "" ? "active" : ""}>
              <Link href="/contactus" className="sub-menu-item">
                Contact Us
              </Link>
            </li>
            <li className={manu === "/contact-one" || "" ? "active" : ""}>
              <Link href="/signup" className="sub-menu-item">
                GET Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
