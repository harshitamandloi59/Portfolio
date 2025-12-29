// import React from "react";
// import { motion } from "framer-motion";
// import { FaLaptopCode, FaBriefcase } from "react-icons/fa";

// const WorkExperience = () => {
//   const workData = [
//     {
//       id: 1,
//       year: "2023 - Present",
//       role: "MERN Stack Developer Intern",
//       company: "Tech Solutions Pvt. Ltd.",
//       details:
//         "Worked on building full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed responsive dashboards and REST APIs.",
//       icon: <FaLaptopCode size={24} />,
//     },
//     {
//       id: 2,
//       year: "2022 - 2023",
//       role: "Frontend Developer (Freelance)",
//       company: "Self Employed",
//       details:
//         "Built modern, responsive websites with React and Tailwind CSS for small businesses. Focused on UI/UX and performance optimization.",
//       icon: <FaBriefcase size={24} />,
//     },
//   ];

//   return (
//     <section id="work" className="py-20 bg-[#0f213d] text-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
//           Work Experience
//         </h2>

//         <div className="relative border-l-4 border-cyan-500 ml-4">
//           {workData.map((work, idx) => (
//             <motion.div
//               key={work.id}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//               viewport={{ once: true }}
//               className="mb-10 ml-6"
//             >
//               {/* Dot + Icon */}
//               <span className="absolute -left-[34px] flex items-center justify-center w-10 h-10 bg-cyan-500 text-black rounded-full shadow-lg">
//                 {work.icon}
//               </span>

//               <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition duration-300">
//                 <h3 className="text-xl font-semibold">{work.role}</h3>
//                 <span className="block text-sm text-cyan-400 mb-2">
//                   {work.year} • {work.company}
//                 </span>
//                 <p className="text-gray-300">{work.details}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;


import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  const workData = [
    {
      id: 1,
      year: "2024 - Present",
      role: "MERN Stack Intern",
      company: "Dollop Infotech Pvt Ltd",
      details:
        "Currently pursuing a MERN Stack internship, working on frontend development using React.js and contributing to backend APIs using Node.js and Express. Collaborating with team members to build scalable web applications.",
      icon: <FaLaptopCode size={22} />,
    },
    {
      id: 2,
      year: "2023",
      role: "MERN Full Stack Trainee",
      company: "Placement Adda",
      details:
        "Completed MERN Full Stack training with hands-on experience in building scalable applications. Worked with MongoDB, Express.js, React.js, and Node.js. Focused on modern JavaScript frameworks and clean UI development.",
      icon: <FaBriefcase size={22} />,
    },
    {
      id: 3,
      year: "June 2023 – July 2023",
      role: "Web Development Trainee",
      company: "Mood Indigo (IIT Bombay)",
      details:
        "Successfully completed certified Web Development training covering HTML, CSS, JavaScript, and related technologies. Gained strong fundamentals, practical experience, and problem-solving skills.",
      icon: <FaGraduationCap size={22} />,
    },
  ];

  return (
    <section id="work" className="py-20 bg-[#0f213d] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
          Work Experience
        </h2>

        <div className="relative border-l-4 border-cyan-500 ml-4">
          {workData.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              {/* Dot + Icon */}
              <span className="absolute -left-[34px] flex items-center justify-center w-10 h-10 bg-cyan-500 text-black rounded-full shadow-lg">
                {work.icon}
              </span>

              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition duration-300">
                <h3 className="text-xl font-semibold">{work.role}</h3>
                <span className="block text-sm text-cyan-400 mb-2">
                  {work.year} • {work.company}
                </span>
                <p className="text-gray-300">{work.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
