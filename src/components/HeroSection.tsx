import { ChevronRight, PlayCircle, Search } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center lg:h-screen max-lg:space-y-5 relative max-lg:flex-col max-lg:pt-28">
      <motion.div
        className="xl:ml-[10%] lg:ml-[5%]  max-lg:px-[10%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.h1
          className="font-bold text-7xl text-text w-[41rem] max-xl:w-[38rem] max-lg:w-full leading-19 max-lg:text-center max-md:text-6xl max-sm:text-5xl max-sm:leading-13"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The kind of <span className="text-[#817253]">furniture</span> you have been looking for
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
          className="flex items-center gap-5 w-full mt-5 max-lg:flex-col max-lg:gap-2"
        >
          <motion.div className="lg:w-1/2 w-full text-text flex justify-center gap-2 items-center bg-[#E5F0B6] py-4 px-3 rounded-lg hover:bg-lime-300 cursor-pointer transition-all ease-in-out duration-300">
            <Search size={17} />
            <p className="uppercase text-lg">Search Catalog</p>
          </motion.div>
          <div className="lg:w-1/2 w-full text-text flex justify-center gap-2 items-center bg-white border border-text py-4 px-3 rounded-lg hover:bg-text hover:text-white transition-all ease-in-out duration-300">
            <PlayCircle size={17} />
            <p className="uppercase text-lg">Watch Videos</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:absolute top-0 right-0 bg-[url('https://images.unsplash.com/photo-1659005766979-45ab682d1d0b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat w-[33rem] max-lg:w-full h-full flex items-end max-lg:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          className="my-20 ml-10 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.p
            className="bg-white/50 text-text inline-block text-xl py-3 px-6 rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            $329
          </motion.p>
          <motion.p
            className="text-7xl text-white max-md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Posht Sofa
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex gap-3 bg-text text-white rounded-md py-3 px-6 text-lg items-center uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <p>View Details</p> <ChevronRight />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
