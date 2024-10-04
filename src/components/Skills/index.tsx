import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <StackIcon name="html5" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "CSS",
      icon: <StackIcon name="css3" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "JavaScript",
      icon: <StackIcon name="js" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "ReactJS",
      icon: <StackIcon name="reactjs" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "Next.js",
      icon: <StackIcon name="nextjs" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "TailwindCSS",
      icon: <StackIcon name="tailwindcss" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "VueJS",
      icon: <StackIcon name="vuejs" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "Node.js",
      icon: <StackIcon name="nodejs" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "GraphQL",
      icon: <StackIcon name="graphql" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "MongoDB",
      icon: <StackIcon name="mongodb" style={{ width: 30, height: 30 }} />,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600 mt-2">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
