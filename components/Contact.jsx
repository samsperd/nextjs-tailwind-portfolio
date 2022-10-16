import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
    return ( 
        <div id="contact" className="w-fullm lg:h-screen">
            <div className="m-auto max-h-[1240px] px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">
                    Get In Touch
                </h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left side */}
                        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="h-full lg:p-4">
                                <div>
                                    <img className="rounded-xl hover:scale-105 ease-in duration-300" src="/assets/contact.jpg" alt="/" />
                                </div>
                                <div>
                                    <h2 className="py-2">
                                        Obinna Iloeje
                                    </h2>
                                    <p>
                                        Frontend Developer
                                    </p>
                                    <p className="py-4">
                                        I am avaliable for freelance or full-time positions. Contact me and let's talk.
                                    </p>
                                </div>
                            <div>
                                <p className="uppercase pt-8">
                                    Connect with me
                                </p>
                                <div className="flex items-center justify-between py-4">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaLinkedin />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>                                
                            </div>

                        </div>
                    {/* Right Side */}
                    <div className="w-full col-span-3 h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />                                    
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />                                    
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={'10'}></textarea>                                   
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href={'/'}>
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 p-4">
                            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;