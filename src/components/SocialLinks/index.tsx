import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { SocialIcon } from "react-social-icons";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/felipe-tomazetti/",
      icon: <SocialIcon network="linkedin" style={{ width: 30, height: 30 }} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/felipe-tomazetti",
      icon: <StackIcon name="github" style={{ width: 30, height: 30 }} />,
    },
  ];

  return (
    <section className="py-12 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Se conecte comigo!</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={"_blank"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-xl hover:scale-105 transform transition-transform flex items-center gap-2"
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
