// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   { title: "E-Commerce App", img: "/images/project1.png" },
//   { title: "Portfolio Website", img: "/images/project2.png" },
//   { title: "Blog Platform", img: "/images/project3.png" },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="section">
//       <h2 className="text-3xl text-center mb-6 text-blue-400">Projects</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-[#161b22] p-4 rounded-lg shadow-md hover:shadow-lg transition"
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-semibold text-center">
//               {project.title}
//             </h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack MERN e-commerce platform with payment gateway integration.",
  },
  {
    title: "Social Media App",
    desc: "A React and Node.js based social networking platform with real-time chat.",
  },
  {
    title: "Portfolio Website",
    desc: "A fully responsive developer portfolio with animations and modern UI.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-4">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
