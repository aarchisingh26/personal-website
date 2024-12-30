"use client";

import { useEffect } from "react";

export default function Header() {
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

  //scroll top
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

        <div className="flex justify-end w-3/4 font-medium">
          <a href="#about" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            About
          </a>
          <a href="#projects" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            Projects
          </a>
          <a href="#experience" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            Experience
          </a>
          <a href="#contact" className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8 nav-link">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}


