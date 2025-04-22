import React from 'react'

import Image from 'next/image'
import Button from './button'

const GetApp = () => {
  return (
    <section className="flex justify-center items-center w-full flex-col pb-[100px] px-6 lg:px-20 3xl:px-0">
      <div 
      style={{
        backgroundImage: "url('/asserts/pattern.png')"}}
      className=" mx-auto max-w-[1440px] relative flex w-full flex-col justify-between gap-32 overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[590px] 2xl:rounded-5xl ">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-600">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/asserts/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/asserts/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/asserts/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp