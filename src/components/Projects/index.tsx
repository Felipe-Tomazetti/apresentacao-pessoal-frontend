import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A project about X technology",
    },
    {
      title: "Project Two",
      description: "An amazing app built with React and Next.js",
    },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
