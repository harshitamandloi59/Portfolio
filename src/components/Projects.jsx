


// import React from "react";
// import { motion } from "framer-motion";

// const projectData = [
//   {
//     title: "E-Commerce Platform",
//     desc: "A full-stack MERN e-commerce platform with payment gateway integration.",
//   },
//   {
//     title: "Social Media App",
//     desc: "A React and Node.js based social networking platform with real-time chat.",
//   },
//   {
//     title: "Portfolio Website",
//     desc: "A fully responsive developer portfolio with animations and modern UI.",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-900">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-cyan-400 mb-12"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Projects
//         </motion.h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projectData.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold text-cyan-400">
//                 {project.title}
//               </h3>
//               <p className="text-gray-300 mt-4">{project.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Learn & Achieve (MERN Stack)",
    img: "/images/learnAndAchieve.png",
    desc: "A large-scale MERN learning platform with classes, subjects, mock tests, authentication, role-based access, and CRUD operations.",
    github: "https://github.com/your-username/learn-achieve",
    live: "#",
  },
  {
    title: "CICO – Check-In Check-Out System",
    img: "/images/cico.png",
    desc: "A MERN-based real-time attendance system enabling efficient check-in and check-out tracking.",
    github: "https://github.com/your-username/cico-system",
    live: "#",
  },
  {
    title: "Chat Application (MERN Stack)",
    img: "/images/chat-app.png",
    desc: "A real-time chat app using MERN and Socket.io with authentication and one-to-one messaging.",
    github: "https://github.com/your-username/mern-chat-app",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Screenshot */}
              <img
                src={project.img}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mt-3">{project.desc}</p>

                {/* Links */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded bg-gray-700 hover:bg-gray-600"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded bg-cyan-500 text-black hover:bg-cyan-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
