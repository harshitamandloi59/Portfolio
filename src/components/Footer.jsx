// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#161b22] py-6 text-center mt-10">
//       <p className="text-gray-400">© 2025 Lucky. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-center text-gray-400">
      © {new Date().getFullYear()} Lucky | MERN Stack Developer
    </footer>
  );
};

export default Footer;
