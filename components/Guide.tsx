import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="felxCenter flex-col">
      <div className="max-container padding-container pb-24 w-full">
        <Image src="/camp.svg" alt="camp" height={50} width={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">we are here for you</p>
     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
      <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[390px]">Guide you to right path</h2>
      <p className="regular-16 text-gray-50 lg:max-w-[520px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam aspernatur vero quisquam deserunt necessitatibus hic aperiam voluptates ducimus nam.\</p>
     </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image src='/boat.png' alt="boat" width={1440} height={580}
        className="2xl:rounded-5xl object-cover object-center w-full"/>
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image src='/meter.svg' alt="meter" height={158} width={16}/>
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-50">destination</p>
                <p className="bold-16 text-green-50">24mil</p>
              </div>

              <p className="bold-20 mt-2">AdrakLasjan</p>
            </div>
            <div className="flex w-full flex-col">
              
                <p className="regular-16 text-gray-50">destination</p>
               

              <h4 className="bold-20 mt-2 whitespace-nowrap">AdrakLasjan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
