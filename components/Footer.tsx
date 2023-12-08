import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="max-container padding-container w-full flex flex-col gap-14">
        <div className="flex flex-col justify-center items-start gap-[10%] md:flex-row">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 md:flex-1 sm:justify-between">
            {FOOTER_LINKS.map((item) => (
              <FooterColomn key={item.title} title={item.title}>
                <ul className="regular 14 flex flex-col gap-4 text-gray-30">
                  {item.links.map((link) => (
                    <Link href="/" key={link} className="hover:underline">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColomn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColomn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((item) => (
                  <Link
                    href="/"
                    key={item.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap"> {item.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {item.value}
                    </p>
                  </Link>
                ))}
              </FooterColomn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColomn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((item) => (
                    <Link href="/" key={item}>
                      <Image
                        src={item}
                        alt='logo'
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColomn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"/>
        <p className="regular-14 text-center w-full text-gray-30">ha mai hi bnaya hu </p>
      </div>
    </footer>
  );
};

interface FooterColomnProps {
  title: string;
  children: React.ReactNode;
}
const FooterColomn = ({ title, children }: FooterColomnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
