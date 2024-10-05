import { motion } from "framer-motion";
import ProfilePicture from "../../assets/images/profile-image.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-transparent text-white text-center py-16 md:py-24 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-2/3"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Felipe Tomazetti
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3"
        >
          <img
            src={ProfilePicture}
            alt="Your Name"
            className="rounded-full w-36 h-36 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52 object-cover mx-auto mb-4 md:mb-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
