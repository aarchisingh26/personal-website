// "use client";

// export default function Experience() {
//   return (
//     <section id="experience">
//       <div className="min-h-screen md:h-screen flex bg-white items-start md:items-center justify-center relative">
//         <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

//         <div className="poppins w-full md:w-1/2 h-auto flex flex-col pt-20 md:pt-36 pb-10 md:pb-60 px-4">
//           <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
//             <span className="before:block before:absolute ml-1 sm:ml-2 mb-4 sm:mb-6 italic before:-inset-1 before:-skew-y-3 before:bg-green-400 relative inline-block">
//               <span className="relative text-black">EXPERIENCE.</span>
//             </span>
//           </p>

//           {/* Pinkbyte 2 */}
//           <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4 md:pb-2 space-y-3 md:space-y-0">
//             <span className="font-semibold text-lg sm:text-xl md:text-xl md:hidden">2026</span>
//             <div className="flex flex-col">
//               <span className="font-semibold text-lg sm:text-xl md:text-xl mb-1 sm:mb-2">
//                 Software Developer Intern @ Pinkbyte Inc.
//               </span>
//               <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
//                 <li>Built the company’s first ML-based automated server control pipeline using Python, Datadog, and MySQL, automating infrastructure scale-up, scale-down, and hold decisions from live server metrics.</li>
//                 <li>Trained a RandomForest classification model from scratch using engineered CPU, memory, and network features, achieving 95% validation accuracy across scale-up, scale-down, and hold decisions.</li>
//                 <li>Built a real-time inference loop polling live Datadog metrics on a 2-minute cycle, normalizing time-series data and dispatching scaling decisions with sub-minute prediction latency.</li>
//                 <li>Shipped production safeguards; cooldown periods, MySQL-backed state tracking, and a minimum 1-server availability floor, projecting $8K-$15K in annual compute savings by eliminating unnecessary infrastructure events.</li>
//               </ul>
//             </div>
//             <span className="font-semibold text-lg sm:text-xl md:text-xl hidden md:block">2026</span>
//           </div>

//           {/* Pinkbyte */}
//           <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4 md:pb-2 space-y-3 md:space-y-0">
//             <span className="font-semibold text-lg sm:text-xl md:text-xl md:hidden">2025</span>
//             <div className="flex flex-col">
//               <span className="font-semibold text-lg sm:text-xl md:text-xl mb-1 sm:mb-2">
//                 Software Developer Intern @ Pinkbyte Inc.
//               </span>
//               <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
//                 <li>Developed and deployed Terraform scripts to automate cloud server provisioning on OCI, reducing manual setup time by 85%.</li>
//                 <li>Enhanced website backend for audit document review and built a MagSafe lock system using Raspberry Pi.</li>
//                 <li>Developed Python scripts for MySQL & Microsoft Access, reducing processing time by 60% and saving 10+ hours/week.</li>
//               </ul>
//             </div>
//             <span className="font-semibold text-lg sm:text-xl md:text-xl hidden md:block">2025</span>
//           </div>

//           {/* EngSoc */}
//           {/* <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4 md:pb-2 space-y-3 md:space-y-0">
//             <span className="font-semibold text-lg sm:text-xl md:text-xl md:hidden">2024</span>
//             <div className="flex flex-col">
//               <span className="font-semibold text-lg sm:text-xl md:text-xl mb-1 sm:mb-2">
//                 Software Developer @ University of Waterloo EngSoc
//               </span>
//               <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
//                 <li>Implemented major website enhancements and plug-ins in WordPress.</li>
//                 <li>Developed automation in JavaScript to streamline repetitive tasks, boosting productivity.</li>
//                 <li>Created a website traffic tracker using Google Analytics for data-driven content optimization.</li>
//               </ul>
//             </div>
//             <span className="font-semibold text-lg sm:text-xl md:text-xl hidden md:block">2024</span>
//           </div> */}

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="min-h-screen flex bg-white items-start justify-center relative">
        <hr className="absolute top-0 left-0 right-0 mx-4 border-t-2 border-gray-200" />

        <div className="poppins w-full md:w-1/2 flex flex-col pt-20 md:pt-36 pb-32 px-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <span className="before:block before:absolute ml-1 sm:ml-2 mb-4 sm:mb-6 italic before:-inset-1 before:-skew-y-3 before:bg-green-400 relative inline-block">
              <span className="relative text-black">EXPERIENCE.</span>
            </span>
          </p>

          {/* Pinkbyte 2 */}
          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4 md:pb-2 space-y-3 md:space-y-0">
            <span className="font-semibold text-lg sm:text-xl md:text-xl md:hidden">
              2026
            </span>

            <div className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl md:text-xl mb-1 sm:mb-2">
                Software Developer Intern @ Pinkbyte Inc.
              </span>

              <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                <li>
                  Built the company’s first ML-based automated server control
                  pipeline using Python, Datadog, and MySQL, automating
                  infrastructure scale-up, scale-down, and hold decisions from
                  live server metrics.
                </li>
                <li>
                  Trained a RandomForest classification model from scratch using
                  engineered CPU, memory, and network features, achieving 95%
                  validation accuracy across scale-up, scale-down, and hold
                  decisions.
                </li>
                <li>
                  Built a real-time inference loop polling live Datadog metrics
                  on a 2-minute cycle, normalizing time-series data and
                  dispatching scaling decisions with sub-minute prediction
                  latency.
                </li>
                <li>
                  Shipped production safeguards; cooldown periods, MySQL-backed
                  state tracking, and a minimum 1-server availability floor,
                  projecting $8K-$15K in annual compute savings by eliminating
                  unnecessary infrastructure events.
                </li>
              </ul>
            </div>

            <span className="font-semibold text-lg sm:text-xl md:text-xl hidden md:block">
              2026
            </span>
          </div>

          {/* Pinkbyte */}
          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row justify-between border-b border-gray-300 pb-4 md:pb-2 space-y-3 md:space-y-0">
            <span className="font-semibold text-lg sm:text-xl md:text-xl md:hidden">
              2025
            </span>

            <div className="flex flex-col">
              <span className="font-semibold text-lg sm:text-xl md:text-xl mb-1 sm:mb-2">
                Software Developer Intern @ Pinkbyte Inc.
              </span>

              <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1">
                <li>
                  Developed and deployed Terraform scripts to automate cloud
                  server provisioning on OCI, reducing manual setup time by 85%.
                </li>
                <li>
                  Enhanced website backend for audit document review and built a
                  MagSafe lock system using Raspberry Pi.
                </li>
                <li>
                  Developed Python scripts for MySQL & Microsoft Access,
                  reducing processing time by 60% and saving 10+ hours/week.
                </li>
              </ul>
            </div>

            <span className="font-semibold text-lg sm:text-xl md:text-xl hidden md:block">
              2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}