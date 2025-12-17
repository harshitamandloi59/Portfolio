// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contacts";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//       <Resume />
//     </div>
//   );
// };

// export default App;


import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
// import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Resume />
      <About />
      <WorkExperience />
      {/* <Skills /> */}
      <Education />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
