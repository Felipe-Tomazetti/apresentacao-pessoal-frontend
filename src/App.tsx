import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <div className="container mx-auto max-w-4xl">
        <Skills />
        <Projects />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
