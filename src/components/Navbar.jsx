// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const links = [
//     { id: 1, text: "Home", to: "#" },
//     { id: 2, text: "Resume", to: "#resume" },
//     { id: 3, text: "About", to: "#about" },
//     { id: 4, text: "Projects", to: "#projects" },
//     { id: 5, text: "Contact", to: "#contact" },
    
//   ];

//   return (
//     <nav className="fixed w-full top-0 left-0 bg-gray-800 shadow-md z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold text-cyan-400">Lucky</h1>
//         <ul className="hidden md:flex space-x-8">
//           {links.map((link) => (
//             <li key={link.id}>
//               <a href={link.to} className="hover:text-cyan-400">
//                 {link.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="md:hidden">
//           {navOpen ? (
//             <FaTimes size={24} onClick={() => setNavOpen(false)} />
//           ) : (
//             <FaBars size={24} onClick={() => setNavOpen(true)} />
//           )}
//         </div>
//       </div>
//       {navOpen && (
//         <ul className="md:hidden flex flex-col items-center bg-gray-700 py-4 space-y-4">
//           {links.map((link) => (
//             <li key={link.id}>
//               <a
//                 href={link.to}
//                 onClick={() => setNavOpen(false)}
//                 className="hover:text-cyan-400"
//               >
//                 {link.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // 👈 smooth scroll ke liye

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "Resume", to: "resume" },
    { id: 3, text: "About", to: "about" },
    { id: 4, text: "Projects", to: "projects" },
    { id: 5, text: "Skills", to: "skills" },
    { id: 6, text: "Education", to: "education" }, // 👈 new
    { id: 7, text: "Contact", to: "contact" },
    { id: 8, text: "Work", to: "work" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide cursor-pointer">
          Harshita
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, text, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-cyan-400 cursor-pointer transition-colors duration-300"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden text-cyan-400">
          {navOpen ? (
            <FaTimes size={26} onClick={() => setNavOpen(false)} />
          ) : (
            <FaBars size={26} onClick={() => setNavOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 py-6 space-y-6 text-lg font-medium">
          {links.map(({ id, text, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setNavOpen(false)}
                className="hover:text-cyan-400 cursor-pointer transition-colors duration-300"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
