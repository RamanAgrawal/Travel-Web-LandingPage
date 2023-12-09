import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

interface FeatureItemProps {
  title: string;
  icon: string;
  des: string;
}

const FeatureItem = ({ title, icon, des }: FeatureItemProps) => {
  return (
    <li className="flex flex-col flex-1 w-full items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt={title} height={28} width={28}/>
      </div>
      <div className="bold-20 mt-5 capitalize lg:bold:32">{title}</div>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{des}</p>
    </li>
  );
};

const Features = () => {
  return (
    <section id="services" className="flexCenter flex-col bg-feature-bg overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-container padding-container flex relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            height={1000}
            width={440}
            className="feature-phone"
          />
        </div>
        <div className="flex w-full flex-col z-20 lg:w-[60%]">
          <div className="relative">
            <Image
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              src="/camp.svg"
              alt="camp"
              height={50}
              width={50}
            />
            <h2 className="bold-40 lg:bold-60">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((features) => (
              <FeatureItem
                key={features.title}
                title={features.title}
                icon={features.icon}
                des={features.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Features;
