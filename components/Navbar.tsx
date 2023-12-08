"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [active, setactive] = useState<boolean>(false);
  const [isColored, setisColored] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setisColored(true);
    } else {
      setisColored(false);
    }
  };

  // Use the effect to attach and detach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`flexBetween padding-container max-container fixed z-30 py-5 w-full transition-all delay-400 ${isColored&&'bg-gray-200'}`}>
        <Link href={"/"}>
          <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-gray-50 cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:flexCenter">
          <Button
            onClick={() => {}}
            icon="/user.svg"
            variant="btn_dark_green"
            type="button"
            title="Login"
          />
        </div>
        <Image
          onClick={() => setactive(true)}
          src={"/menu.svg"}
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
      <div
        className={`transition-all fixed z-50 flex flex-col gap-5 p-20 pb-24 left-0 right-0 top-0 h-[50vh] w-full bg-green-90 delay-100 translate-y-[-100%] ${
          active && "translate-y-0"
        }`}
      >
        <Image
          onClick={() => setactive(false)}
          src="/close.svg"
          width={32}
          height={32}
          alt="close"
          className="absolute top-[32px] right-5 cursor-pointer"
        />
        <ul>
        {NAV_LINKS.map((link) => (
          <Link
          onClick={()=>setactive(false)}
            key={link.key}
            href={link.href}
            className="regular-16 text-white cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold p-3"
          >
            {link.label}
          </Link>
        ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
