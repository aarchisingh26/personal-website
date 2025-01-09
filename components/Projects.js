// "use client";

// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { FaNode, FaPython, FaRaspberryPi, FaReact } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { RiNextjsFill } from "react-icons/ri";
// import { TbBrandCpp } from "react-icons/tb";
// import { SiExpress, SiJupyter, SiVite } from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { FaSwift } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";

// export default function Projects() {
//   return (
//     <section id="projects">
//     <div className="flex bg-white items-center justify-center relative">
      
//       <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

//       <div className="poppins w-1/2 min-h-screen flex flex-col pt-48 pb-48">


//       <p className="text-5xl font-extrabold">
//           <span className="before:block before:absolute ml-2 mb-6 italic before:-inset-1 before:-skew-y-3 before:bg-sky-400 relative inline-block">
//             <span className="relative text-black">PROJECTS.</span>
//           </span>
//       </p>


//         {/* Project Grid */}
//         <div className="grid grid-cols-2 gap-6">

//           {/* Individual Project Box */}
//           <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
//             {/* Other content */}
//             <div className="flex-1 mb-8">
//               <div className="flex items-center">
//                 <h3 className="text-2xl font-semibold">
//                   Perfume Recommendation <span>Model</span>
//                 </h3>
//                 <a
//                   href="https://example.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-2"
//                 >
//                   <FaArrowUpRightFromSquare className="text-black text-xl" />
//                 </a>
//               </div>
//               <p className="mt-2 text-gray-700">
//                 I curated a dataset of over 46 popular women's perfumes for this model. The user can input any popular perfume, and the model will display other similar perfumes based on fragrance notes/family.
//               </p>
//             </div>
//             {/* Footer: Links and Icons */}
//             <div className="mt-auto">
//               <a
//                 href="https://github.com/aarchisingh26/perfume-recommendation-model"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline hover:underline-offset-2 italic font-medium"
//               >
//                 View GitHub.
//               </a>
//               <br />
//               <div className="icons-wrapper-1 mt-4">
//                 <div className="icon-container-1">
//                   <FaPython className="icon-size-1"/>
//                 </div>

//                 <div className="icon-container-1">
//                   <SiJupyter className="icon-size-1"/>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* second */}
//           <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
//             {/* Other content */}
//             <div className="flex-1 mb-8">
//               <div className="flex items-center">
//                 <h3 className="text-2xl font-semibold">
//                   UW Sync - Exam Scheduler
//                 </h3>
//                 <a
//                   href="https://uw-sync.vercel.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-2"
//                 >
//                   <FaArrowUpRightFromSquare className="text-black text-xl" />
//                 </a>
//               </div>
//               <br />
//               <p className="mt-2 text-gray-700">
//               I extracted exam date data from the University of Waterloo website and created UW Sync, allowing students to 
//             search for exams and add them to their calendars all at once.              </p>
//             </div>
//             {/* Footer: Links and Icons */}
//             <div className="mt-auto">
//               <a
//                 href="https://github.com/aarchisingh26/uw-sync"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline hover:underline-offset-2 italic font-medium"
//               >
//                 View GitHub.
//               </a>
//               <br />
//               <div className="icons-wrapper-1 mt-4">

//                 <div className="icon-container-1">
//                   <IoLogoJavascript className="icon-size-1"/>
//                 </div>

//                 <div className="icon-container-1">
//                   <RiNextjsFill className="icon-size-1"/>
//                 </div>

//                 <div className="icon-container-1">
//                   <SiExpress className="icon-size-1"/>
//                 </div>

//                 <div className="icon-container-1">
//                   <FaNode className="icon-size-1" />
//                 </div>

//                 <div className="icon-container-1">
//                   <BiLogoPostgresql className="icon-size-1"/>
//                 </div>

//               </div>
//             </div>
//           </div>


//           <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
//             {/* Other content */}
//             <div className="flex-1 mb-8">
//               <div className="flex items-center">
//                 <h3 className="text-2xl font-semibold">
//                   Expenza - An Expense Tracker
//                 </h3>
//                 <a
//                   href="https://expenza-6fu4.onrender.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-2"
//                 >
//                   <FaArrowUpRightFromSquare className="text-black text-xl" />
//                 </a>
//               </div>
//               <br />
//               <p className="mt-2 text-gray-700">
//                 A MERN stack application (MongoDB, Express.js, React, and Node.js). Tracks your
//                 daily expenses and saves them into your account, displays the total you spent, etc.
//                 My next steps: adding graphs to give the user a better visualization of where their money is going.
//               </p>
//             </div>
//             {/* Footer: Links and Icons */}
//             <div className="mt-auto">
//               <a
//                 href="https://github.com/aarchisingh26/expenza"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline hover:underline-offset-2 italic font-medium"
//               >
//                 View GitHub.
//               </a>
//               <br />
//               <div className="icons-wrapper-1 mt-4">
//                 <div className="icon-container-1">
//                   <IoLogoJavascript className="icon-size-1" />
//                 </div>
//                 <div className="icon-container-1">
//                   <SiMongodb className="icon-size-1" />
//                 </div>
//                 <div className="icon-container-1">
//                   <SiExpress className="icon-size-1" />
//                 </div>
//                 <div className="icon-container-1">
//                   <FaNode className="icon-size-1" />
//                 </div>
//                 <div className="icon-container-1">
//                   <FaReact className="icon-size-1" />
//                 </div>
//                 <div className="icon-container-1">
//                   <SiVite className="icon-size-1" />
//                 </div>
//               </div>
//             </div>
//           </div>


//           <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
//             {/* Other content */}
//             <div className="flex-1 mb-8">
//               <div className="flex items-center">
//                 <h3 className="text-2xl font-semibold">
//                   AuraGlass - A Smart Mirror
//                 </h3>
//                 <a
//                   href="https://example.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-2"
//                 >
//                   <FaArrowUpRightFromSquare className="text-black text-xl" />
//                 </a>
//               </div>
//               <br />
//               <p className="mt-2 text-gray-700">
//                 My team and I collaborated to make a smart mirror! Some features include:
//                 real-time Spotify player, daily updated news/weather/date/time, an alarm clock,
//                 and Google Assistant!
//               </p>
//             </div>
//             {/* Footer: Links and Icons */}
//             <div className="mt-auto">
//               <a
//                 href="https://example.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline hover:underline-offset-2 italic font-medium"
//               >
//                 View GitHub.
//               </a>
//               <br />
//               <div className="icons-wrapper-1 mt-4">
//                 <div className="icon-container-1">
//                   <IoLogoJavascript className="icon-size-1" />
//                 </div>
//                 <div className="icon-container-1">
//                   <FaRaspberryPi className="icon-size-1" />
//                 </div>
//               </div>
//             </div>
//           </div>




          

//         </div>

        

//       </div>
//     </div>
//     </section>
//   );
// }

"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaNode, FaPython, FaRaspberryPi, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress, SiJupyter, SiVite } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSwift } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex bg-white items-center justify-center relative">
        <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

        <div className="poppins w-full sm:w-3/4 lg:w-1/2 h-auto flex flex-col pt-20 sm:pt-32 pb-32 sm:pb-60 px-4 sm:px-8">
          <p className="text-4xl sm:text-5xl font-extrabold">
            <span className="before:block before:absolute ml-2 mb-6 italic before:-inset-1 before:-skew-y-3 before:bg-sky-400 relative inline-block">
              <span className="relative text-black">PROJECTS.</span>
            </span>
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Individual Project Box */}
            <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
              {/* Other content */}
              <div className="flex-1 mb-8">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold">
                    Perfume Recommendation <span>Model</span>
                  </h3>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <FaArrowUpRightFromSquare className="text-black text-xl" />
                  </a>
                </div>
                <p className="mt-2 text-gray-700">
                  I curated a dataset of over 46 popular women's perfumes for this model. The user can input any popular perfume, and the model will display other similar perfumes based on fragrance notes/family.
                </p>
              </div>
              {/* Footer: Links and Icons */}
              <div className="mt-auto">
                <a
                  href="https://github.com/aarchisingh26/perfume-recommendation-model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-2 italic font-medium"
                >
                  View GitHub.
                </a>
                <br />
                <div className="icons-wrapper-1 mt-4">
                  <div className="icon-container-1">
                    <FaPython className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <SiJupyter className="icon-size-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Project Box */}
            <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
              <div className="flex-1 mb-8">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold">
                    UW Sync - Exam Scheduler
                  </h3>
                  <a
                    href="https://uw-sync.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <FaArrowUpRightFromSquare className="text-black text-xl" />
                  </a>
                </div>
                <p className="mt-2 text-gray-700">
                  I extracted exam date data from the University of Waterloo website and created UW Sync, allowing students to search for exams and add them to their calendars all at once.
                </p>
              </div>
              {/* Footer: Links and Icons */}
              <div className="mt-auto">
                <a
                  href="https://github.com/aarchisingh26/uw-sync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-2 italic font-medium"
                >
                  View GitHub.
                </a>
                <br />
                <div className="icons-wrapper-1 mt-4">
                  <div className="icon-container-1">
                    <IoLogoJavascript className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <RiNextjsFill className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <SiExpress className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <FaNode className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <BiLogoPostgresql className="icon-size-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Project Box */}
            <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
              <div className="flex-1 mb-8">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold">
                    Expenza - An Expense Tracker
                  </h3>
                  <a
                    href="https://expenza-6fu4.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <FaArrowUpRightFromSquare className="text-black text-xl" />
                  </a>
                </div>
                <p className="mt-2 text-gray-700">
                  A MERN stack application (MongoDB, Express.js, React, and Node.js). Tracks your daily expenses and saves them into your account, displays the total you spent, etc.
                </p>
              </div>
              {/* Footer: Links and Icons */}
              <div className="mt-auto">
                <a
                  href="https://github.com/aarchisingh26/expenza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-2 italic font-medium"
                >
                  View GitHub.
                </a>
                <br />
                <div className="icons-wrapper-1 mt-4">
                  <div className="icon-container-1">
                    <IoLogoJavascript className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <SiMongodb className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <SiExpress className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <FaNode className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <FaReact className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <SiVite className="icon-size-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Project Box */}
            <div className="bg-white p-6 outline-gray-200 outline transition-shadow flex flex-col h-full">
              <div className="flex-1 mb-8">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold">
                    AuraGlass - A Smart Mirror
                  </h3>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <FaArrowUpRightFromSquare className="text-black text-xl" />
                  </a>
                </div>
                <p className="mt-2 text-gray-700">
                  My team and I collaborated to make a smart mirror! Some features include: real-time Spotify player, daily updated news/weather/date/time, an alarm clock, and Google Assistant!
                </p>
              </div>
              {/* Footer: Links and Icons */}
              <div className="mt-auto">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-2 italic font-medium"
                >
                  View GitHub.
                </a>
                <br />
                <div className="icons-wrapper-1 mt-4">
                  <div className="icon-container-1">
                    <IoLogoJavascript className="icon-size-1" />
                  </div>
                  <div className="icon-container-1">
                    <FaRaspberryPi className="icon-size-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
