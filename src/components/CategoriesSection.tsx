import { motion } from "framer-motion";
import Accordion from "./Accordion";

const CategoriesSection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "photo1",
    },
    {
      url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "photo2",
    },
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "photo3",
    },
  ];

  return (
    <motion.div
      className="flex lg:h-screen py-20 gap-10 max-lg:justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image Grid for Desktop */}
      <motion.div
        className="w-2/3 flex gap-5 max-lg:hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-50 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-full rounded-xl bg-cover bg-center bg-no-repeat"></div>
        <div className="w-50 bg-[url('https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-full rounded-xl"></div>
        <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-xl bg-cover bg-center bg-no-repeat"></div>
      </motion.div>

      {/* Text and Accordion */}
      <motion.div
        className="lg:w-1/3 flex flex-col justify-between py-10 text-text lg:mr-52 max-lg:space-y-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-2xl">Categories</h1>
        <p className="font-bold text-5xl max-lg:text-4xl">Furniture Sets Recommendations</p>
        <Accordion />

        {/* Mobile Images */}
        <div className="grid grid-cols-3 gap-5 lg:hidden px-[5%]">
          {images.map((image, index) => (
            <motion.img
              key={image.name}
              src={image.url}
              alt={image.name}
              className="h-40 w-full object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CategoriesSection;
