import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import gsap from 'gsap'

export default function Navbar() {
    // Theme Manager
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const mobileNav = useRef(null)

    const openMobileMenu = () => {
        gsap.to(mobileNav.current, {
            width: '100%',
            ease: 'power3.out',
        })
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    return (
        <div className='flex h-20 justify-between items-center'>
            <div className='hidden'>
                <svg onClick={openMobileMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" fill={theme === 'light' ? 'black' : 'white'} /></svg>
                <div ref={mobileNav} className='w-0  text-4xl font-bold  h-screen overflow-hidden dark:bg-white dark:text-black p-8  z-10 absolute top-0 left-0 flex flex-col'>
                    <div className='mobile-menu-item p-4'>
                        Home <span className='text-xs font-normal'>(You're Here)</span>
                    </div>
                    <div className='mobile-menu-item p-4'>
                        Blog
                    </div>
                    <div className='mobile-menu-item p-4'>
                        Projects
                    </div>
                    <div className='mobile-menu-item p-4'>
                        Contact
                    </div>
                </div>
            </div>
            <div className='md:flex gap-4 text-md hidden'>
                <Link href={"/"} className="px-2 font-semibold py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition">Home</Link>
                <Link href={"/"} className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition">Articles</Link>
                <Link href={"/"} className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition">Projects</Link>
                <Link href={"/"} className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition">Contact</Link>
            </div>
            <Image src={theme === 'light' ? '/icons/moon-outline.svg' : '/icons/sun-outline.svg'} height={"35"} width={"35"} alt="Sun Icon" className="p-2 rounded-lg hover:outline hover:outline-gray-300 transition-all cursor-pointer  bg-gray-200 dark:bg-gray-200  rounded transition" onClick={switchTheme} />
        </div>
    )
}
