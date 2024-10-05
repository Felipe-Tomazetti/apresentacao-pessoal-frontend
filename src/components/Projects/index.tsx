import { useRef } from "react";
import { motion } from "framer-motion";
import TBimage from "../../assets/images/tb.png";

const Projects = () => {
  const projects = [
    {
      name: "Aplicativo Leilão de Fretes",
      description:
        "Aplicativo para leilão de fretes feito durante meu trabalho em uma software house.",
      link: "https://play.google.com/store/apps/details?id=com.leilaodefretes",
      image: TBimage,
    },
  ];

  return (
    <motion.div
      initial={{ x: "-20vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 30,
        duration: 1.5,
      }}
      className="bg-gradient-to-l from-blue-500 to-transparent py-8 mt-2 rounded-lg"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Projetos</h2>
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              //initial={{ opacity: 0, y: 50 }}
              //animate={{ opacity: 1, y: 0 }}
              //transition={{ delay: index * 0.2 }}
              className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-2/3 md:w-1/3 lg:w-1/3"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-white">{project.description}</p>
                <a
                  href={project.link}
                  target={"_blank"}
                  className="inline-block mt-4 text-indigo-300 hover:text-indigo-200"
                >
                  Ver mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
