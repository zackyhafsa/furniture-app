import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Membership = () => {
  return (
    <motion.div
      className="py-20 px-[10%] text-text bg-graylight space-y-10 max-lg:text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-2xl tracking-wide uppercase"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Limited Deals
      </motion.h1>

      <motion.h1
        className="font-bold text-6xl max-lg:text-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Become a member and get 10% off of your first purchase
      </motion.h1>

      <motion.div
        className="flex items-center max-lg:justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="email"
          placeholder="Enter your email here"
          className="text-2xl py-3 px-2 bg-white rounded-l-xl max-lg:text-xl max-md:text-lg"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Mail
            size={55}
            className="bg-greenlight text-2xl py-4 rounded-r-xl max-lg:text-7xl max-lg:px-2 w-10"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Membership;
