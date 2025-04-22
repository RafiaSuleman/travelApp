import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../../constants'
import Button from './button'

const Navbar = () => {
  return (
    <nav className=' flex justify-between max-container px-10 relative z-30 py-5'>
      <Link href="/">
        <Image src="/asserts/hilink-logo.svg" alt='' width={74} height={29}/>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className='regular-16 text-gray-600 flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className='lg:flex justify-center hidden'>
          <Button type="button" title="LogIn" icon="/asserts/user.svg" varient = "btn_dark_green"/>  
        </div>
        <div className='lg:hidden flex items-center'>
          <Image src="/asserts/menu.svg" alt="" width={24} height={24}/>
        </div>
    </nav>
  )
}

export default Navbar
