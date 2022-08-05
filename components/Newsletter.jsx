import Image from "next/image";

import { motion } from "framer-motion";

import Text from "../public/assets/text.png";
import VisaGroup from "../public/assets/visa group.png";

const Newsletter = () => {
  return (
    <div className="h-[65vh] p-10 lg:px-20 bg-[#41B3F4] text-center flex flex-col justify-center items-center gap-5 lg:flex-row">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 justify-center items-center"
      >
        <h5 className="text-[#414449] font-medium">
          Subscribe to get updated news
        </h5>

        <Image src={Text} alt="text" />
      </motion.div>
      <div className="w-24"></div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 1 }}
        viewport={{ once: true }}
        className="mt-5 flex flex-col gap-5 justify-center items-center"
      >
        <h1 className="text-4xl font-bold font-mono">
          Subscribe Our Newsletter
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <p className="p-4 bg-orange-500 text-white font-medium cursor-pointer">
            Subscribe
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ rotate: 20, y: 0, scale: 0.5, opacity: 0 }}
        whileInView={{ rotate: 0, y: -50, scale: 1, opacity: 1 }}
        transition={{ delay: 1.25, duration: 2 }}
        className="hidden lg:block"
      >
        <motion.div
          whileHover={{ scale: 0.8, rotate: 90 }}
          transition={{ duration: 1 }}
        >
          <Image src={VisaGroup} alt="visagroup" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
