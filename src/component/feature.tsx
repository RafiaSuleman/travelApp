import Image from "next/image";
import React from "react";
import { FEATURES } from "../../constants";
type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}
const Feature = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
    <div className="max-container padding-container relative w-full flex justify-end">
      <div className="flex flex-1 lg:min-h-[900px]">
        <Image
          src="/asserts/phone.png"
          alt="phone"
          width={440}
          height={1000}
          className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
        />
      </div>

      <div className="z-20 flex w-full flex-col lg:w-[60%] lg:px-0 px-10">
        <div className='relative'>
          <Image
            src="/asserts/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-44px] w-10 lg:w-[50px]"
          />
          <h2 className="text-[40px] font-[700] leading-[120%] lg:bold-64">Our Features</h2>
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {FEATURES.map((feature) => (
            <FeatureItem 
              key={feature.title}
              title={feature.title} 
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};

export default Feature;
