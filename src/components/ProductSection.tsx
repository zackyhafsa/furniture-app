import { motion } from "framer-motion";
import Carousel from "./Carousel";

const ProductSection = () => {
  return (
    <div className="py-20 bg-primary">
      {/* Header dengan animasi */}
      <motion.div
        className="flex justify-between gap-3 px-[10%] max-lg:px-[5%] py-20 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-greenlight space-y-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl tracking-wide max-lg:text-xl">OUR PRODUCTS</h1>
          <h1 className="font-bold text-5xl max-lg:text-2xl">This Month Best Seller</h1>
        </motion.div>

        <motion.a
          href="#"
          className="bg-greenlight hover:bg-lime-300 text-text rounded-md px-6 py-3 max-lg:px-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          See More
        </motion.a>
      </motion.div>

      {/* Carousel dengan efek muncul halus */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default ProductSection;
