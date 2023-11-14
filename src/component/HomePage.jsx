import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="h-screen justify-center items-center flex max-sm:">
      <div>
       

        <div className="flex flex-col justify-center items-center">
          <p className="uppercase"> let's build together</p>

          <p className="text-[70px] flex flex-col justify-center items-center font-bold p-4">
          
             <pan className='text-[50px] md:text-[70px]'>Hi, I'm Paul </pan>
            
           <span className="text-[30px] md:text-[50px]"> A Front End  Developer </span>
          </p>
          <p className="text-xl text-center px-20">
            I'm a Front-end developer specializing in building and designing
            exceptional digital experience.
          </p>
        </div>
      </div>
    </div>
  );
}
