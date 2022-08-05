import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

import Card from "../public/assets/visa card.png";
import Icons from "../public/assets/icons.png";

const Hero = () => {
  return (
    <div className="p-10 lg:p-20 xl:px-36 text-center lg:text-left lg:flex gap-5 h-[35vh] xl:h-[50vh]">
      <div className="flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start lg:w-1/2 xl:pt-24">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono font-bold text-5xl xl:font-extrabold xl:text-7xl"
        >
          Banking more smart
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-700 font-thin xl:font-normal xl:text-xl"
        >
          Meet the only spend management platform and corporate card
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="p-3 bg-black md:w-42 text-white items-center flex gap-3 cursor-pointer"
          >
            <AiOutlineArrowRight />
            <h3 className="font-medium text-center">Get you card</h3>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden lg:flex lg:w-1/2"
      >
        <div className="flex items-center justify-center bg-[#44B2F1] w-4/5 relative">
          <motion.div
            initial={{ rotate: 20, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1.25, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              whileHover={{ rotate: 26, y: 90, x: 40 }}
              transition={{ duration: 0.25 }}
            >
              <Image src={Card} alt="Card" />
            </motion.div>
          </motion.div>
        </div>
        <div className="bg-yellow-300 flex items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Image src={Icons} alt="Icons" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
