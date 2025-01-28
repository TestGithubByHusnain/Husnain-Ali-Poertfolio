// "use client"
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Homepage = () => {
//   return (
//     <motion.div className="h-full" 
//     initial={{y:"-200vh"}} 
//     animate={{y:"0%"}} 
//     transition={{duration:1}}>
//     <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8 lg:gap-16">
//       {/* Image container */}
//       <div className="h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center">
//         <Image
//           src="/husnain.png"
//           alt="Hero illustration showcasing creativity and technology"
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Text container */}
//       <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-center justify-center text-center lg:items-start lg:text-left">
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Building Seamless, Engaging, and Cutting-Edge Web Experiences
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//         I am a front-end developer passionate about crafting responsive, visually stunning web applications. With expertise in React and Next.js, I create user-focused designs that are accessible and high-performing.
        
//         </p>

//         <div className="w-full flex flex-wrap gap-4 justify-center lg:justify-start">
//           <button className="px-6 py-3 rounded-lg bg-black text-white font-medium shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
//             View My Work
//           </button>
//           <button className="px-6 py-3 rounded-lg border border-gray-800 font-medium shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </div>
//     </motion.div>
//   );
// };

// export default Homepage;
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Homepage = () => {
  const router = useRouter();

  const navigateToPortfolio = () => {
    router.push("/portfolio"); // Replace with your actual portfolio page route
  };

  const navigateToContact = () => {
    router.push("/contact"); // Replace with your actual contact page route
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8 lg:gap-16">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center">
          <Image
            src="/husnain.png"
            alt="Hero illustration showcasing creativity and technology"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building Seamless, Engaging, and Cutting-Edge Web Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I am a front-end developer passionate about crafting responsive,
            visually stunning web applications. With expertise in React and
            Next.js, I create user-focused designs that are accessible and
            high-performing.
          </p>

          <div className="w-full flex flex-wrap gap-4 justify-center lg:justify-start">
            {/* Navigate to Portfolio */}
            <button
              onClick={navigateToPortfolio}
              className="px-6 py-3 rounded-lg bg-black text-white font-medium shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              View My Work
            </button>

            {/* Navigate to Contact */}
            <button
              onClick={navigateToContact}
              className="px-6 py-3 rounded-lg border border-gray-800 font-medium shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
