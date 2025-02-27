"use client";
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu = useCallback(() => {
            setIsOpen((current) => !current);
        }, []);
    return (
        <nav className='flex justify-between px-6 lg:px-20 3xl:px-0 py-5 relative z-30 max-w-full mx-auto'>
            <Link href="/">
                <Image  src="/images/hilink-logo.svg" alt="logo" width={72} height={29} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex items-center justify-center px-8">
                {NAV_LINKS.map((e)=>(
                    <Link href={e.href} key={e.key} className="hover:text-green-600 cursor-pointer regular-16 transition-all flex items-center justify-center">
                        {e.label}
                    </Link>
                ))}
            </ul>
            <div>
                <Button
                type="button" title="Login" icon="/images/user.svg" 
                variant="bg-green-600 px-6 py-2 text-white transition-all hover:bg-black"
                />
            </div>
            <Image
            onClick={toggleMenu}
            src="/images/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            />
            {isOpen&&(
                <div className='bg-green-600 absolute w-full top-20 h-screen z-10  py-5 flex-col  mt-2 flex'>
                <div className='flex flex-col pt-20 gap-8 '>
                    <div className='px-3 text-center text-[25px] text-white hover:underline'>
                        Home
                    </div>  
                    <div className='px-3 text-center text-[25px] text-white hover:underline'>
                        How Hilink Work?
                    </div>
                    <div className='px-3 text-center text-[25px] text-white hover:underline'>
                        Services
                    </div>
                    <div className='px-3 text-center text-[25px] text-white hover:underline'>
                        Pricing
                    </div>
                    <div className='px-3 text-center text-[25px] text-white hover:underline'>
                        Contact Us
                    </div>
                </div>
            </div>
            )}
        </nav>
    ) 
}

export default Navbar
