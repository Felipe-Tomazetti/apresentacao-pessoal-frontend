import { motion } from "framer-motion";
import ProfilePicture from "../../assets/images/profile-image.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3"
        >
          <img
            src={ProfilePicture}
            alt="Your Name"
            className="rounded-full w-40 h-40 object-cover mx-auto mb-6 md:mb-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-2/3"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Felipe Tomazetti
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8">
            I am a passionate developer creating modern web experiences with
            clean code and a focus on UI/UX.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
