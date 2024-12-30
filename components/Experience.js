"use client";

export default function Experience() {
  return (
    <section id="experience">
    <div className="h-screen flex bg-white items-center justify-center relative">
      
      <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

      <div className="poppins w-1/2 h-screen flex flex-col pt-56 pb-60">


      <p className="text-5xl font-extrabold">
          <span className="before:block before:absolute ml-2 mb-6 italic before:-inset-1 before:-skew-y-3 before:bg-green-400 relative inline-block">
            <span className="relative text-black">EXPERIENCE.</span>
          </span>
      </p>

    <div className="mt-4 flex justify-between border-b border-gray-300 pb-2">

        <div className="flex flex-col">
            <span className="font-semibold text-xl mb-2">Software Developer @ University of Waterloo EngSoc</span>
            <ul className="list-disc pl-6 text-lg text-gray-700">
                <li>stuff</li>
                <li>stuff</li>
                <li>stuff</li>
            </ul>
        </div>
        
        <span className="font-semibold text-xl">2024</span>
    </div>




        

        

        




      </div>
    </div>
    </section>
  );
}