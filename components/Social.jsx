import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="bg-[#52c0ffd0] p-10 lg:p-20 lg:px-36 text-center lg:text-left flex flex-wrap justify-center gap-10 lg:flex-nowrap lg:gap-60 ">
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          viewport={{ once: true }}
          className="text-xl font-medium font-mono"
        >
          We Building Social Uniqueness
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          viewport={{ once: true }}
          className="font-thin text-gray-700 xl:font-normal "
        >
          The marketing strategy lays out target markets and the vaule.
        </motion.p>
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          viewport={{ once: true }}
          className="text-xl font-medium font-mono"
        >
          Social Media beyond probability
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.75 }}
          viewport={{ once: true }}
          className="font-thin text-gray-700 xl:font-normal "
        >
          Essentially a formula for how a business is going to compete.
        </motion.p>
      </div>
    </div>
  );
};

export default Social;
