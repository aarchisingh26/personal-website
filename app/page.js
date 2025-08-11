// import About from "@/components/About";
// import Header from "@/components/Header";
// import Projects from "@/components/Projects";
// import Experience from "@/components/Experience";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <div>
//         <Header />

//         {/* Text container with adjusted alignment */}
//         <div className="h-screen flex bg-white items-center justify-center relative">
//           <div className="poppins w-1/2 flex flex-col pt-60 pb-60">
//             <div className="text-7xl font-extrabold">
//               <p className="leading-tight gradient-1 font-extrabold extrabold-fallback">
//                 I like to 
//                 <span className="before:block before:absolute ml-2 mr-2 italic before:-inset-1 before:-skew-y-3 before:bg-yellow-300 relative inline-block">
//                   <span className="relative text-black">design</span>
//                 </span>
//                 and
//                 <span className="before:block before:absolute ml-2 mr-2 italic before:-inset-1 before:-skew-y-3 before:bg-yellow-300 relative inline-block">
//                   <span className="relative text-black">build</span>
//                 </span>
//                 things.
//               </p>
//             </div>

//             <br />

//             <div className="text-xl leading-relaxed poppins">
//               <p>Hi! I'm Aarchi, a first-year Software Engineering student @ University of Waterloo.</p>
//             </div>

//             {/* <div className="mt-5">
//               <p>Email</p>
//             </div>

//             <div className="mt-5">
//               <p>LinkedIn</p>
//             </div>

//             <div className="mt-5">
//               <p>Download CV</p>
//             </div> */}

//           </div>
//         </div>

//         <About />
//         <Projects />
//         <Experience />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Header />

        <div className="h-screen flex bg-white items-center justify-center relative">
          <div className="poppins w-full sm:w-3/4 md:w-1/2 flex flex-col pt-60 pb-60 px-4">
            <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
              <p className="leading-tight gradient-1 font-extrabold extrabold-fallback">
                I like to 
                <span className="before:block before:absolute ml-2 mr-2 italic before:-inset-1 before:-skew-y-3 before:bg-yellow-300 relative inline-block">
                  <span className="relative text-black">design</span>
                </span>
                and
                <span className="before:block before:absolute ml-2 mr-2 italic before:-inset-1 before:-skew-y-3 before:bg-yellow-300 relative inline-block">
                  <span className="relative text-black">build</span>
                </span>
                things.
              </p>
            </div>

            <br />

            <div className="text-lg sm:text-xl leading-relaxed poppins">
              <p>Hi there! I'm Aarchi, a second-year Computer Science (Co-op) student @ University of Waterloo.</p>
            </div>

            <div className="text-sm text-gray-600 mt-10 poppins">
              <a href="/Aarchi_Singh_SWEIntern_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Resume
              </a>
              <span className="mx-2">|</span>
              <a href="https://github.com/aarchisingh26" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
              <span className="mx-2">|</span>
              <a href="https://www.linkedin.com/in/aarchisingh/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>


            {/* <div className="mt-5">
              <p>Email</p>
            </div>

            <div className="mt-5">
              <p>LinkedIn</p>
            </div>

            <div className="mt-5">
              <p>Download CV</p>
            </div> */}
          </div>
        </div>

        <About />
        
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

