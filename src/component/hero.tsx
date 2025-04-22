import Image from 'next/image'
import React from 'react'
import Button from './button'

const Hero = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20  '>

      <div style={{backgroundImage: "url('/asserts/pattern-bg.png')"}} 
      className='absolute right-0  h-screen w-screen bg-cover bg-center md:-right-28 xl:-top-10 top-90'/>
       {/*className='absolute -z-10 hidden h-[500px] w-full bg-cover bg-center lg:block xl:-top-20 xl:h-[600px]'/> */}
      

      {/* LEFT */}
      <div className='relative z-20 flex flex-1 flex-col  xl:w-1/2 px-4 lg:text-left'>
        <Image src="asserts/camp.svg" alt='camp' height={50} width={50} className=' absolute left-[1px] lg:top-[-40px] top-[-29px] w-10 lg:w-[50px]'/>
        <h1 className='text-7xl font-bold lg:text-8xl mt-1'> Putuk Turno Hill Area </h1>
        <p className='mt-16 text-gray-500 xl:max-w-[520px]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, sint? </p>
        <div className='my-11 flex flex-wrap items-center gap-5'>
            <div className='relative flex items-center'>
                {Array(5).fill(1).map((_, index) => (
                    <Image key={index} src="asserts/star.svg" alt='star' height={24} width={24} className='w-5'/>
                ))}
            </div>
            <p className='text-bold text-blue-950 mr-2'> 198k
                <span className='text-gray-500'>Excellent Reviews </span>
            </p>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
                <Button variant='btn_green' type="button" title='Download App'/>
                <Button variant='btn_white_text' type="button" title='How to Use'/>
            </div>
        </div>
        <div className='relative flex flex-1 items-start ' >
            <div className='relative z-20 w-[268px]  flex-col xl:flex-row gap-8 rounded-3xl bg-green-950 px-7 py-8'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-500'>Location</p>
                        <Image src="/asserts/close.svg" alt='Close' width={24} height={24}/>

                    </div>
                    <p className='font-bold text-white'> Aguas Calientes</p>
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='block text-gray-500'>Distance</p>
                            <p className='font-bold text-white '> 173.28 mi</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='block text-gray-500'>Elevation</p>
                            <p className='font-bold text-white '> 2.047 km</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
