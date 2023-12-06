import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 bd-32 md:gap-28 lg:py20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative flex z-1 flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <h1 className="text-5xl bold-52 lg:bold-88">Adrak Lasjabfds</h1>
        <p className="regular-16 mt-16 text-gray-30 xl:max-w[520px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          officia.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            100k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" variant="btn_green" title="Download App" />
          <Button
            type="button"
            variant="btn_white"
            title="How its work?"
            icon="/play.svg"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 py-8 px-7">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regulat-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" height={24} width={24} />
            </div>
            <p className="blod-20 text-white">Kuch bhi</p>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regulat-16 text-gray-20 block">distence</p>
                <p className="blod-20 text-white">1425</p>
              </div>
              <div className="flex flex-col">
                <p className="regulat-16 text-gray-20 block">distence</p>
                <p className="blod-20 text-white">1425</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
