"use client";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSwift } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
    <div className="h-screen flex bg-white items-center justify-center relative">
      
      <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

      <div className="poppins w-1/2 h-screen flex flex-col pt-56 pb-60">
      
        <p className="text-5xl font-extrabold">
          <span className="before:block before:absolute ml-2 mr-2 italic before:-inset-1 before:-skew-y-3 before:bg-custom-pink relative inline-block">
            <span className="relative text-black">ABOUT.</span>
          </span>
        </p>

        <p className="mt-4 text-lg">
          I aspire to build software products that add value to our daily lives.
          I found my passion for coding in a grade 8 Computers & Technology class where I was exposed to HTML programming.
          Now, I am interested in full-stack development or even something related to FinTech!
          <br /><br />When I am not coding, I enjoy reading books and doing anything artsy.
        </p>

        <br />

        <p className="text-lg pb-7 pt-7 font-medium">
          Languages + Frameworks I'm well-versed in:
        </p>

        <div className="icons-wrapper">
          <div className="icon-container">
            <svg viewBox="0 0 128 128" focusable="false" className="icon-size">
              <path fill="" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
            </svg>
            <code className="icon-name">Python</code>
          </div>

          <div className="icon-container">
            <IoLogoJavascript className="icon-size"/>
            <code className="icon-name">JavaScript</code>
          </div>

          <div className="icon-container">
            <FaReact className="icon-size"/>
            <code className="icon-name">React</code>
          </div>

          <div className="icon-container">
            <RiNextjsFill className="icon-size"/>
            <code className="icon-name">Next.js</code>
          </div>

          <div className="icon-container">
            <TbBrandCpp className="icon-size"/>
            <code className="icon-name">C/C++</code>
          </div>

          <div className="icon-container">
            <SiExpress className="icon-size"/>
            <code className="icon-name">Express</code>
          </div>

          <div className="icon-container">
            <BiLogoPostgresql className="icon-size"/>
            <code className="icon-name">PostgreSQL</code>
          </div>

          <div className="icon-container">
            <FaSwift className="icon-size"/>
            <code className="icon-name">Swift</code>
          </div>


          
          
        </div>




      </div>
    </div>
    </section>
  );
}