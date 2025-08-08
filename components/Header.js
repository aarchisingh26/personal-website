// "use client";

// import { useEffect } from "react";

// export default function Header() {
//   useEffect(() => {
//     const links = document.querySelectorAll(".nav-link");
//     const sections = document.querySelectorAll("section");

//     links.forEach(link => {
//       link.addEventListener("click", event => {
//         if (link.getAttribute("href").startsWith("#")) {
//           event.preventDefault();
//           const targetId = link.getAttribute("href").slice(1);
//           const targetSection = document.getElementById(targetId);

//           if (targetSection) {
//             targetSection.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//             });
//           }
//         }
//       });
//     });

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           const id = section.getAttribute("id");

//           links.forEach(link => {
//             link.classList.remove("active");
//             if (link.getAttribute("href") === `#${id}`) {
//               link.classList.add("active");
//             }
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   //scroll top
//   const scrollToTop = (event) => {
//     event.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <header className="poppins fixed top-0 w-full bg-white/40 backdrop-blur-md z-50 mx-auto">
//       <div className="lg:ml-20 ml-7 py-7 flex justify-between items-center lg:text-md">

//         <div className="text-2xl font-bold text-left">
//           <a href="#" onClick={scrollToTop} className="lg:pr-10 pr-8 text-right">
//           aarchisingh.
//           </a>
//         </div>

//         <div className="flex justify-end w-3/4 font-medium">
//           <a href="#about" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             About
//           </a>
//           <a href="#projects" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             Projects
//           </a>
//           <a href="#experience" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             Experience
//           </a>
//           <a href="#contact" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             Contact
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const links = document.querySelectorAll(".nav-link");
//     const sections = document.querySelectorAll("section");

//     links.forEach(link => {
//       link.addEventListener("click", event => {
//         if (link.getAttribute("href").startsWith("#")) {
//           event.preventDefault();
//           const targetId = link.getAttribute("href").slice(1);
//           const targetSection = document.getElementById(targetId);

//           if (targetSection) {
//             targetSection.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//             });
//           }
//         }
//       });
//     });

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           const id = section.getAttribute("id");

//           links.forEach(link => {
//             link.classList.remove("active");
//             if (link.getAttribute("href") === `#${id}`) {
//               link.classList.add("active");
//             }
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = (event) => {
//     event.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <header className="poppins fixed top-0 w-full bg-white/40 backdrop-blur-md z-50 mx-auto">
//       <div className="lg:ml-20 ml-7 py-7 flex justify-between items-center lg:text-md">

//         <div className="text-2xl font-bold text-left">
//           <a href="#" onClick={scrollToTop} className="lg:pr-10 pr-8 text-right">
//             aarchisingh.
//           </a>
//         </div>

//         <div className="lg:flex hidden justify-end w-3/4 font-medium">
//           <a href="#about" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             About
//           </a>
//           <a href="#projects" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             Projects
//           </a>
//           <a href="#experience" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             Experience
//           </a>
//           <a href="#contact" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
//             Contact
//           </a>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="lg:hidden block text-2xl mr-5"
//         >
//           {menuOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile navigation menu */}
//       {menuOpen && (
//         <div className="lg:hidden flex flex-col items-center font-medium bg-white/40 backdrop-blur-md p-4">
//           <a href="#about" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2">
//             About
//           </a>
//           <a href="#projects" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2">
//             Projects
//           </a>
//           <a href="#experience" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2">
//             Experience
//           </a>
//           <a href="#contact" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2">
//             Contact
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
      link.addEventListener("click", event => {
        if (link.getAttribute("href").startsWith("#")) {
          event.preventDefault();
          const targetId = link.getAttribute("href").slice(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            
            setMenuOpen(false);
          }
        }
      });
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");

          links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="poppins fixed top-0 w-full bg-white/40 backdrop-blur-md z-50 mx-auto">
      <div className="lg:ml-20 ml-7 py-7 flex justify-between items-center lg:text-md">

        <div className="text-2xl font-bold text-left">
          <a href="#" onClick={scrollToTop} className="lg:pr-10 pr-8 text-right">
            aarchisingh.
          </a>
        </div>

        <div className="lg:flex hidden justify-end w-3/4 font-medium">
          <a href="#about" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            About
          </a>
          
          <a href="#experience" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            Experience
          </a>


          <a href="#projects" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            Projects
          </a>



          <a href="#contact" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            Contact
          </a>
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden block text-2xl mr-5"
        >
          {menuOpen ? <IoIosCloseCircle /> : <TiThMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center font-medium bg-white/40 backdrop-blur-md p-4">
          <a href="#about" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#experience" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" className="text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link py-2" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}


