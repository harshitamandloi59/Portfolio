// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="section flex flex-col md:flex-row items-center gap-10"
//     >
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="flex-1 text-center md:text-left"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Hi, I'm <span className="text-blue-400">Lucky</span>
//         </h1>
//         <p className="mt-4 text-lg text-gray-300">
//           MERN Stack Developer | Building modern web apps with smooth UI/UX
//         </p>
//         <a
//           href="#projects"
//           className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
//         >
//           View My Work
//         </a>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="flex-1 flex justify-center"
//       >
//         <img
//           src="/images/hm.jpg"
//           alt="profile"
//           className="w-64 md:w-80 rounded-full border-4 border-blue-500 shadow-lg"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import girl from "../assets/girl.png"; // Updated import for the new image
// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1, // Each child will animate with a 0.2s delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I’m <span className="text-cyan-400">Harshita</span> <br />A MERN
            Stack Developer
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-lg">
            I specialize in building modern full-stack web applications using
            MongoDB, Express, React, and Node.js. Passionate about crafting
            clean UI and scalable backend solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Image with extra animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], // Keyframes for a subtle floating effect
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity, // Repeat the animation forever
              repeatType: "reverse",
            },
          }}
          className="flex justify-center"
        >
          <img
            src={girl} // Updated to use the new image URL
            alt="Programmer Girl Illustration"
            className="w-80 md:w-[450px] drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;