import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section id="app" className="flexCenter flex-col w-full pb-[100px]">
      <div className="get-app">
        <div className="flex w-full z-20 flex-1 flex-col justify-center items-start gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for Free now
          </h2>
          <p className="regular-16 text-gray-10">
            available on iphone and android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              full
              title="Download App"
              icon="/apple.svg"
              type="button"
              variant="btn_white"
            />
            <Button
              full
              title="Download App"
              icon="/android.svg"
              type="button"
              variant="btn_dark_green_outline"
            />
          </div>
        </div>
        <div className="flex items-center justify-end flex-1">
          <Image src='/phones.png' alt="phone" height={870} width={550}/>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
