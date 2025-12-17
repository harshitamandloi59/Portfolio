// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="section">
//       <h2 className="text-3xl text-center mb-6 text-blue-400">Contact Me</h2>
//       <form className="max-w-lg mx-auto flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="p-3 rounded-lg bg-[#161b22] border border-gray-700"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="p-3 rounded-lg bg-[#161b22] border border-gray-700"
//         />
//         <textarea
//           placeholder="Your Message"
//           className="p-3 rounded-lg bg-[#161b22] border border-gray-700"
//           rows="5"
//         ></textarea>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;


import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a project in mind? Let’s collaborate!
        </motion.p>
        <a
          href="mailto:lucky@example.com"
          className="bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-300 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
