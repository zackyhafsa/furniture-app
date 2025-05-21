import { BriefcaseBusiness, Search } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const images = [{ name: "gusto" }, { name: "stripe" }, { name: "treehouse" }, { name: "upwork" }];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.42, 0, 0.58, 1] },
  });

  return (
    <div className="tracking-wide">
      <div ref={ref} className="bg-text py-20 px-[10%] space-y-8 text-greenlight">
        <motion.h1
          {...fadeUp(0)}
          className="text-2xl uppercase text-center lg:text-left max-md:text-lg"
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="font-bold text-6xl text-center lg:text-left max-lg:text-5xl max-md:text-3xl"
        >
          We care about details and the quality of our products
        </motion.p>

        <div className="flex flex-wrap justify-center lg:justify-between gap-10 items-center max-lg:justify-start">
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-5 font-bold text-2xl uppercase max-md:text-lg max-w-[300px]"
          >
            <div className="bg-greenlight/50 p-2 rounded-md">
              <Search />
            </div>
            <p>MANUFACTURED WITH QUALITY MATERIALS</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            className="flex items-center gap-5 font-bold text-2xl uppercase max-md:text-lg max-w-[300px]"
          >
            <p className="bg-greenlight/50 inline-block p-1.5 rounded-md w-14 text-center">5</p>
            <p>5 YEARS OF WARRANTY FOR EACH PRODUCT</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.8)}
            className="flex items-center gap-5 font-bold text-2xl uppercase max-md:text-lg max-w-[300px]"
          >
            <div className="bg-greenlight/50 p-2 rounded-md">
              <BriefcaseBusiness />
            </div>
            <p>20 YEARS OF EXPERTISE</p>
          </motion.div>
        </div>
      </div>

      <div className="px-[10%] max-lg:px-[5%] py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div {...fadeUp(1)} className="text-text text-center lg:text-left">
          <h1 className="text-7xl font-bold max-md:text-5xl max-sm:text-4xl">25+</h1>
          <p className="text-2xl max-sm:text-xl">PARTNERED BRANDS</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 max-md:gap-3 items-center">
          {images.map((image, i) => (
            <motion.img
              key={image.name}
              src={`${image.name}.svg`}
              alt={image.name}
              className="h-10 w-auto max-w-[120px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.2, ease: [0.42, 0, 0.58, 1] }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
