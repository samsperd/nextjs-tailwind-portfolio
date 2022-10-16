/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(() => {
      if (
        router.asPath === '/property' ||
        router.asPath === '/crypto' ||
        router.asPath === '/netflix' ||
        router.asPath === '/twitch'
        ) {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
      } else {
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
      }
    }, [router])
    

    useEffect(() => {
      
        const handleShadow = () => {
            if (window.scrollY > 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }

        window.addEventListener('scroll', handleShadow)
    }, [])
    


    const handleNav = () => (
        setNav(!nav)
    )
    // const displayNav = () => (
    //     setNav(false)
    // )


    return ( 
        <div style={{ background: navBg }} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href={'/'}>
                    <Image src="/assets/navLogo.png" alt="d" width={'125'} height={'50'} />
                </Link>
                <div>
                    <ul style={{ color: linkColor}} className="hidden md:flex">
                        <Link href={'/'}>
                            <li className="ml-10 text-sm uppercase hover:border-0">
                                    Home
                            </li>
                        </Link>
                        <Link href={'/#about'}>
                            <li className="ml-10 text-sm uppercase hover:border-0">
                                    About
                            </li>
                        </Link>
                        <Link href={'/#skills'}>
                            <li className="ml-10 text-sm uppercase hover:border-0">
                                    Skills
                            </li>
                        </Link>
                        <Link href={'/#projects'}>
                            <li className="ml-10 text-sm uppercase hover:border-0">
                                    Projects
                            </li>
                        </Link>
                        <Link href={'/#contact'}>
                            <li className="ml-10 text-sm uppercase hover:border-0">
                                    Contact
                            </li>
                        </Link>
                    </ul>
                    <div className="md:hidden  " onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'hidden' }>
                <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src="/assets/navLogo.png" alt="d" width={'87'} height={'35'}/>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" onClick={handleNav}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 ">
                                Let's build something legendary together
                            </p>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href={'/'}>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Home
                                    </li>
                                </Link>
                                <Link href={'/#about'}>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        About
                                    </li>
                                </Link>
                                <Link href={'/#skills'}>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Skills
                                    </li>
                                </Link>
                                <Link href={'/#projects'}>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Projects
                                    </li>
                                </Link>
                                <Link href={'/#contact'}>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase -tracking-widest text-[#5651e5]">
                                    Let's connect
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedin />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;