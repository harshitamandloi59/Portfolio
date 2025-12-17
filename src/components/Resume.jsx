// import React from "react";
// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";

// const Resume = () => {
//   return (
//     <section
//       id="resume"
//       className="min-h-screen flex flex-col items-center justify-center bg-[#0A0F1C] text-white px-6"
//     >
//       <motion.h2
//         className="text-4xl font-bold mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Resume
//       </motion.h2>

//       <motion.div
//         className="max-w-3xl bg-[#121826] p-8 rounded-2xl shadow-lg"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h3 className="text-2xl font-semibold mb-4">Lucky Harshita</h3>
//         <p className="mb-4 text-gray-300">
//           MERN Stack Developer with expertise in building scalable, full-stack
//           web applications. Passionate about clean UI, animations, and
//           performance optimization.
//         </p>

//         <div className="flex justify-center mt-6">
//           <a
//             href="/resume.pdf"
//             download
//             className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
//           >
//             <FaDownload /> Download CV
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Resume;


import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Resume
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Download or view my resume to see my skills, projects, and experience.
        </motion.p>
        <motion.a
          href="/Resume.pdf"
          target="_blank"
          className="bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-300 transition"
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
