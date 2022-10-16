import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg"
import cryptoImg from "../public/assets/projects/crypto.jpg"
import netflixImg from "../public/assets/projects/netflix.jpg"
import twitchImg from "../public/assets/projects/twitch.jpg"
import ProjectItem from "./ProjectItem";

/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
    return ( 
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">
                    What I've Built
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <ProjectItem title={'Property Finder'} tech={'React Js'} url={'/property'} img={propertyImg} />
                    <ProjectItem title={'Crypto App'} tech={'React Js'} url={'/crypto'} img={cryptoImg} />
                    <ProjectItem title={'Netflix App'} tech={'React Js'} url={'/netflix'} img={netflixImg} />
                    <ProjectItem title={'Twitch UI'} tech={'Next JS'} url={'/twitch'} img={twitchImg} />
                </div>

            </div>
        </div>
     );
}
 
export default Projects;