// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="section">
//       <motion.h2
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl text-center mb-6 text-blue-400"
//       >
//         About Me
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-center text-gray-300 max-w-3xl mx-auto"
//       >
//         I'm a passionate MERN Stack Developer with experience building
//         full-stack web apps. I love designing clean UIs, building scalable
//         backends, and creating smooth animations.
//       </motion.p>
//     </section>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m a MERN Stack Developer with expertise in building scalable and
          modern web applications. I specialize in React, Node.js, Express, and
          MongoDB. I love solving problems, learning new technologies, and
          delivering exceptional user experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
