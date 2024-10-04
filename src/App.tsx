import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
