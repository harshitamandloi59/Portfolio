


// import React from "react";
// import { motion } from "framer-motion";

// const Resume = () => {
//   return (
//     <section id="resume" className="py-20 bg-gray-900">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-cyan-400 mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Resume
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Download or view my resume to see my skills, projects, and experience.
//         </motion.p>
//         <motion.a
//           href="/Resume.pdf"
//           target="_blank"
//           className="bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-300 transition"
//           whileHover={{ scale: 1.1 }}
//         >
//           Download Resume
//         </motion.a>
//       </div>
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

        {/* Resume Link */}
        <motion.a
          href="/resume/MERN_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
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
