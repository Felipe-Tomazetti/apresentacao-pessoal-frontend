import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ x: "-20vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 30, duration: 3 }}
      className="mt-2 py-4 bg-gradient-to-l from-blue-500 to-transparent text-white text-center rounded-lg"
    >
      <h2 className="text-4xl font-bold">Sobre mim</h2>
      <p className="text-lg">
        Me chamo Felipe, sou de Curitiba, tenho 34 anos, formado em Engenharia
        Mecânica pela UTFPR. Sou casado, pai da Zoe (minha cachorrinha viralata
        de 2 anos). Inicie minha carreira trabalhando com Customer Success e
        Suporte me encontrei na programação, onde estou há 2 anos trabalhando
        como Front End, meu objetivo é me tornar referência no que eu faço e
        poder ajudar os outros através do conhecimento.
      </p>
    </motion.div>
  );
};

export default About;
