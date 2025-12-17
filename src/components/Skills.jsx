import React from "react";
import Lottie from "lottie-react";
import reactAnim from "../assets/tools/react.json";
import nodeAnim from "../assets/tools/node.json";
import mongoAnim from "../assets/tools/mongo.json";

const Skills = () => {
  const tools = [
    { name: "React", anim: reactAnim },
    { name: "Node.js", anim: nodeAnim },
    { name: "MongoDB", anim: mongoAnim },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="flex gap-10 justify-center flex-wrap">
        {tools.map((tool) => (
          <div key={tool.name} className="w-24 h-24">
            <Lottie animationData={tool.anim} loop={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
