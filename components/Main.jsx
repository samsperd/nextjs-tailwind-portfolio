import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const Main = () => {
    return ( 
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let's build something together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#5651e5]">Sammy</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
                        I’m focused on building responsive front-end web applications integrating back-end technologies.
                    </p>
                    <div className="flex items-center justify-between py-4 m-auto max-w-[330px]">
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
     );
}
 
export default Main;