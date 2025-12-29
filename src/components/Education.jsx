import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2019",
      title: "10th Standard",
      school: "Govt. High School, Khalghat",
      details: "Scored 87% with strong foundation in Mathematics and Science.",
      icon: <FaSchool size={24} />,
    },
    {
      id: 2,
      year: "2021",
      title: "12th Standard",
      school: "Govt. Higher Secondary School, Khalghat",
      details: "Completed 12th with 90% in PCM (Physics, Chemistry, Math).",
      icon: <FaSchool size={24} />,
    },
    {
      id: 3,
      year: "2024",
      title: "Graduation (B.Sc)",
      school: "Aadarsh Institute of Management & Sciences, Dhamnod",
      details:
        "Specialized in Computer Science. Learned MERN Stack, Data Structures, and built multiple projects.",
      icon: <FaUserGraduate size={24} />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
          Education
        </h2>

        <div className="relative border-l-4 border-cyan-500 ml-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              {/* Dot + Icon */}
              <span className="absolute -left-[34px] flex items-center justify-center w-10 h-10 bg-cyan-500 text-black rounded-full shadow-lg">
                {edu.icon}
              </span>

              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition duration-300">
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <span className="block text-sm text-cyan-400 mb-2">
                  {edu.year} • {edu.school}
                </span>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
