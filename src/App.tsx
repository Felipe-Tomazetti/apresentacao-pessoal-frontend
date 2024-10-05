import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import "./App.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Hero />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <About />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Skills />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Projects />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
