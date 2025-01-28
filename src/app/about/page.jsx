"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ExperienceItem = ({ title, description, company, date, isLeft }) => (
  <div className="flex justify-between h-48">
    {isLeft && (
      <div className="w-1/3">
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{title}</div>
        <div className="p-3 text-sm italic">{description}</div>
        <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">{company}</div>
      </div>
    )}
    <div className="w-1/6 flex justify-center">
      <div className="w-1 h-full bg-gray-600 rounded relative">
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
      </div>
    </div>
    {!isLeft && (
      <div className="w-1/3">
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{title}</div>
        <div className="p-3 text-sm italic">{description}</div>
        <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">{company}</div>
      </div>
    )}
  </div>
);

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const skillInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const experienceInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/husnain1.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              As a front-end developer with 1.5 years of experience, I blend creativity with technical precision to craft dynamic and visually captivating digital experiences. My expertise spans modern frameworks like React and Next.js, and I thrive on bringing user-centric designs to life. With a deep passion for innovation, I focus on building intuitive interfaces that are not only aesthetically pleasing but also function seamlessly across all devices. Each project I undertake is an opportunity to push boundaries, turning complex challenges into elegant, responsive solutions that engage, inspire, and leave a lasting impression.
            </p>

            {/* BIOGRAPHY SCROLL ICON */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              />
              <path d="M12 6V14" stroke="#000000" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={skillInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div initial={{ x: "-300px" }} animate={skillInView ? { x: 0 } : {}} className="flex gap-4 flex-wrap">
              {["JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "Tailwind CSS", "Bootstrap", "GraphQL", "Redux", "GSAP", "Three.js", "Yarn", "Vite", "Github", "Git",].map(skill => (
                <div key={skill} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
  <motion.h1
    initial={{ x: "-300px" }}
    animate={experienceInView ? { x: 0 } : {}}
    transition={{ delay: 0.2 }}
    className="font-bold text-2xl sm:text-3xl md:text-4xl text-center"
  >
    EXPERIENCE
  </motion.h1>

  <motion.div
    initial={{ x: "-300px" }}
    animate={experienceInView ? { x: 0 } : {}}
    className="space-y-12 sm:space-y-16 md:space-y-20"
  >
    {[
      {
        title: "React Developer Intern",
        description:
          "I honed my skills in building dynamic, user-friendly React applications, contributing to real-world projects that delivered seamless user experiences.",
        company: "CodexCue Software Solutions",
        date: "Nov 2024 - Dec 2024",
        isLeft: true,
      },
      {
        title: "Frontend Developer (Intern)",
        description:
          "I focus on building dynamic React applications, utilizing modern tools to create seamless, user-friendly experiences.",
        company: "CodeAlpha",
        date: "Oct 2024 - Nov 2024",
        isLeft: false,
      },
      {
        title: "Front-End Developer (Intern)",
        description:
          "I craft responsive, user-centered web experiences using React.js, Next.js, and Tailwind CSS. My focus is on delivering elegant, high-performance solutions across devices.",
        company: "Developers Hub Corporation LTD",
        date: "Sep 2024 - Oct 2024",
        isLeft: true,
      },
    ].map((item, index) => (
      <ExperienceItem
        key={index}
        title={item.title}
        description={item.description}
        company={item.company}
        date={item.date}
        isLeft={item.isLeft}
      />
    ))}
  </motion.div>
</div>


        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
