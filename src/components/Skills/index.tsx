import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "Next.js", "TailwindCSS", "Node.js"];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
