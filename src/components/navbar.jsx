// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { motion, AnimatePresence, stagger } from "framer-motion";

// const links = [
//   { url: "/", title: "Home" },
//   { url: "/about", title: "About" },
//   { url: "/portfolio", title: "Portfolio" },
//   { url: "/contact", title: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // Variants for hamburger menu animations
//   const lineVariants = {
//     closed: {
//       rotate: 0,
//       backgroundColor: "rgb(0, 0, 0)",
//     },
//     opened: (line) => ({
//       rotate: line === "top" ? 45 : line === "bottom" ? -45 : 0,
//       backgroundColor: "rgb(225, 225, 225)",
//     }),
//   };

//   const centerVariants = {
//     closed: { opacity: 1 },
//     opened: { opacity: 0 },
//   };
// const listVariants={
//   closed:{
//     x:"100vw"
// },
//   opened:{
// x:0,
// transition:{
//   when:"beforeChildren",
//   staggerChildren:0.2,
// }
//   }
// };
// const listItemVariants={
//   closed:{
//     x:-10,
//     opacity:0,

// },
// opened:{
//   x:0,
//   opacity:1,
// }
// }

//   return (
//     <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
//       {/* Links for larger screens */}
//       <div className="hidden md:flex gap-4 w-1/3">
//         {links.map((link) => (
//           <Link
//             key={link.title}
//             href={link.url}
//             className="hover:text-gray-600 transition-colors duration-300"
//           >
//             {link.title}
//           </Link>
//         ))}
//       </div>

//       {/* Logo */}
//       <div className="lg:flex xl:w-1/3 xl:justify-center">
//         <Link
//           href="/"
//           className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
//         >
//           <span className="text-white mr-1">Husnain</span>
//           <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
//             .dev
//           </span>
//         </Link>
//       </div>

//       {/* Social Links */}
//       <div className="hidden md:flex gap-4 w-1/3 justify-end">
//         <Link
//           href="https://github.com/TestGithubByHusnain"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image src="/github.png" alt="GitHub" width={24} height={24} />
//         </Link>
//         <Link
//           href="https://www.instagram.com/husnain_akram3"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
//         </Link>
//         <Link
//           href="https://www.linkedin.com/in/husnain-ali-a11813282"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
//         </Link>
//         <Link
//           href="https://dly.to/YYD77YFO3ip"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image src="/daily-dev.png" alt="Daily Dev" width={24} height={24} />
//         </Link>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden">
//         <button
//           className="w-10 h-8 flex flex-col justify-between z-50 relative"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           <motion.div
//             custom="top"
//             variants={lineVariants}
//             animate={open ? "opened" : "closed"}
//             className="w-10 h-1 bg-black rounded origin-left"
//           />
//           <motion.div
//             variants={centerVariants}
//             animate={open ? "opened" : "closed"}
//             className="w-10 h-1 bg-black rounded"
//           />
//           <motion.div
//             custom="bottom"
//             variants={lineVariants}
//             animate={open ? "opened" : "closed"}
//             className="w-10 h-1 bg-black rounded origin-left"
//           />
//         </button>

        
//           {open && (
//             <motion.div
//              variants={listVariants}
//              initial="closed"
//              animate="opened"
//               className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center gap-8 text-4xl z-40"
//           >
//               {links.map((link) => (
//                 <motion.div variants={listItemVariants} key={link.title}>
                  
// <Link href={link.url}>
//                   {link.title}
//                 </Link>
//                 </motion.div>
                
//               ))}
//             </motion.div>
//           )}
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Variants for hamburger menu animations
  const lineVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(0, 0, 0)",
    },
    opened: (line) => ({
      rotate: line === "top" ? 45 : line === "bottom" ? -45 : 0,
      backgroundColor: "rgb(225, 225, 225)",
    }),
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links for larger screens */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="hover:text-gray-600 transition-colors duration-300"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Husnain</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link
          href="https://github.com/TestGithubByHusnain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href="https://www.instagram.com/husnain_akram3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/husnain-ali-a11813282"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link
          href="https://dly.to/YYD77YFO3ip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/daily-dev.png" alt="Daily Dev" width={24} height={24} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            custom="top"
            variants={lineVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            custom="bottom"
            variants={lineVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center gap-8 text-4xl z-40 pt-60"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
