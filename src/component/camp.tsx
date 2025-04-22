import React from 'react'
import Image from 'next/image';
import { PEOPLE_URL } from '../../constants';
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div 
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-[400px] w-full min-w-[900px] bg-cover bg-no-repeat lg:rounded-r-4xl rounded-3xl">
        <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10  '>
          <div className='flex justify-center items-center gap-4 '>
            <div className='rounded-full bg-green-500 p-4'>
              <Image src="/asserts/folded-map.svg" alt='map' height={28} width={28}/>
              </div>
              
              <div className='flex flex-col gap-1'>
                <h4 className='text-[18px] font-[700] text-white'>{title}</h4>
                <p className='text-[14px] font-[400] text-white '>{subtitle} </p>
            </div>
          </div>
            <div className='flex justify-center items-center gap-6 '>
              <span className='flex -space-x-4 overflow-hidden'>
                {PEOPLE_URL.map((url) => (
                  <Image key={url} src={url} alt='people' height={40} width={40} className=' inline-block h-10 w-10 rounded-full border-2 border-white' />
                ))}
              </span>
              <p className='text-[16px] font-[700] md:text-[20px] md:font-[700] text-white'>{peopleJoined}</p>
            </div>
        </div>
     
    </div>
  )
}


const Camp = () => {

  return (
    <section className=" lg:mx-10 mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
    <div className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto ">
      <CampSite backgroundImage="/asserts/img-1.png" title="Putuk Turno Camp" subtitle=" Lorem ipsum dolor sit amet." peopleJoined="100 +Joined" />
      <CampSite backgroundImage="/asserts/img-2.png" title="Camp 2" subtitle=" Lorem ipsum dolor sit amet." peopleJoined="200 +Joined" />
    
    </div>
    <div className='flex items-center justify-end px-6 lg:-mt-60 mt-10 lg:mr-6'>
      <div className='bg-green-600 p-8 lg:max-w-[500px] md:max-w-[550px] lg:rounded-4xl xl:px-16 xl:py-20 reltive w-full overflow-hidden rounded-3xl'>
        <h2 className='text-white regular-24 md:regular-32 2xl:regular-64'><strong>Feeling Lost</strong> and not know the way?</h2>
        <p className='regular-14 xl:regular-16 mt-5 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis est iure quasi laborum inventore sapiente distinctio obcaecati cumque error!</p>
        <Image src="/asserts/quote.svg" alt='quots' width={186} height={219} className='absolute -right-0 bottom-15 w-[140px] lg:bottom-15 xl:right-6 xl:w-[186px] '/>
      </div>
    </div>
  </section>
  )
}

export default Camp
