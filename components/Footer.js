"use client";

export default function Footer() {
  return (
    <footer className="poppins bottom-0 w-full bg-white/40 backdrop-blur-md z-50 mx-auto">
      <div className="lg:ml-20 ml-7 py-16 flex justify-between items-center lg:text-md">
        {/* Footer Branding */}
        <div className="text-2xl font-bold text-left">
        <a href="#" className="lg:pr-10 pr-8 text-right">
            aarchisingh.
        </a>
        <p className="text-sm font-medium text-gray-600 mt-1">
            &#169; 2024 Aarchi Singh. All rights reserved.<br />
            Made with &#x2665; by Aarchi Singh.
        </p>
        </div>


        {/* Footer Links */}
        <div className="flex justify-end w-3/4 font-medium">
          <a
            href="mailto:a254sing@uwaterloo.ca"
            className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aarchisingh/"
            className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aarchisingh26"
            className="lg:pr-10 pr-8 text-right cursor-pointer hover:underline hover:underline-offset-8"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </footer>
  );
}
