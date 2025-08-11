// "use client";

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { GoPaperclip } from "react-icons/go";

// export default function Contact() {
//   return (
//     <section id="contact">
//       <div className="h-auto md:h-screen flex bg-white items-center justify-center relative">
        
//         <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

//         <div className="poppins w-full md:w-1/2 h-auto md:h-screen flex flex-col pt-28 md:pt-56 pb-20 md:pb-60 px-4">
//           <p className="text-4xl md:text-5xl font-extrabold">
//             <span className="before:block before:absolute ml-2 mb-6 italic before:-inset-1 before:-skew-y-3 before:bg-purple-400 relative inline-block">
//               <span className="relative text-black">CONTACT.</span>
//             </span>
//           </p>

//           <div className="flex flex-col md:flex-row md:justify-between mt-7">

//             <div className="text-lg font-medium mb-6 md:mb-0">
//               <a href="mailto:a254sing@uwaterloo.ca" target="_blank" rel="noopener noreferrer" className="flex mb-6 items-center">
//                 <MdOutlineAlternateEmail className="icon-size" />
//                 <span className="ml-2 hover:underline hover:underline-offset-8">a254sing@uwaterloo.ca</span>
//               </a>
//               <a href="https://www.linkedin.com/in/aarchisingh/" target="_blank" rel="noopener noreferrer" className="mb-6 flex items-center">
//                 <FaLinkedin className="icon-size" />
//                 <span className="ml-2 hover:underline hover:underline-offset-8">aarchisingh</span>
//               </a>
//               <a href="/" target="_blank" rel="noopener noreferrer" className="flex mb-6 items-center">
//                 <GoPaperclip className="icon-size" />
//                 <span className="ml-2 hover:underline hover:underline-offset-8">Resume</span>
//               </a>
//               <a href="https://github.com/aarchisingh26" target="_blank" rel="noopener noreferrer" className="flex items-center">
//                 <FaGithub className="icon-size" />
//                 <span className="ml-2 hover:underline hover:underline-offset-8">aarchisingh26</span>
//               </a>
//             </div>

//             <div className="w-full h-96 md:w-72 md:h-80 relative border-slate-950 border-4 md:ml-16 items-center">
//               <img
//                 src="/mypic.jpg"
//                 alt="Aarchi Singh"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";

export default function Contact() {
  return (
    <section id="contact">
      <div className="h-auto md:h-screen flex bg-white items-center justify-center relative">
        <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

        <div className="poppins w-full sm:w-3/4 lg:w-1/2 h-auto flex flex-col pt-20 sm:pt-32 pb-32 sm:pb-60 px-4 sm:px-8">
          <p className="text-4xl sm:text-5xl font-extrabold pb-20 pt-5">
            <span className="before:block before:absolute ml-2 mr-2 italic before:-inset-1 before:-skew-y-3 before:bg-purple-400 relative inline-block">
              <span className="relative text-black">CONTACT.</span>
            </span>
          </p>


          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Contact Info */}
            <div className="text-lg font-medium flex flex-col items-start">
              <a
                href="mailto:a254sing@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mb-6 items-center"
              >
                <MdOutlineAlternateEmail className="icon-size-contact" />
                <span className="ml-2 hover:underline hover:underline-offset-8">
                  a254sing@uwaterloo.ca
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/aarchisingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mb-6 items-center"
              >
                <FaLinkedin className="icon-size-contact" />
                <span className="ml-2 hover:underline hover:underline-offset-8">
                  aarchisingh
                </span>
              </a>
              <a
                href="/Aarchi_Singh_SWEIntern_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                
                className="flex mb-6 items-center"
              >
                <GoPaperclip className="icon-size-contact" />
                <span className="ml-2 hover:underline hover:underline-offset-8">
                  Resume
                </span>
              </a>
              <a
                href="https://github.com/aarchisingh26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaGithub className="icon-size-contact" />
                <span className="ml-2 hover:underline hover:underline-offset-8">
                  aarchisingh26
                </span>
              </a>
            </div>

            {/* Image */}
            <div className="w-64 h-64 md:w-72 md:h-80 relative border-slate-950 border-4">
              <img
                src="/mypic.jpg"
                alt="Aarchi Singh"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
