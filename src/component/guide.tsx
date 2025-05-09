import React from 'react'
import Image from 'next/image';                       

const Guide = () => {
  return (
    <section className="flex justify-center items-center flex-col px-6 lg:px-20 3xl:px-0 ">
      <div className=" lg:px-20  mx-auto max-w-[1440px] w-full pb-10 ">
        <Image src="/asserts/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto max-w-[1440px] relative w-full">
        <Image 
          src="/asserts/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl lg:rounded-4xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/asserts/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex justify-between items-between flex-col">
            <div className='flex w-full flex-col'>
              <div className="flex justify-between items-between w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
