import Image from "next/image";

import { motion } from "framer-motion";

import SmartImage from "../public/assets/card.png";
import Strategy from "../public/assets/strategy.png";
import Schedule from "../public/assets/schedule.png";

const Smart = () => {
  return (
    <div className="p-10 lg:p-20 xl:p-36 text-center lg:flex lg:text-left">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.25, duration: 1 }}
        viewport={{ once: true }}
        className="hidden lg:block lg:w-3/5 z-10"
      >
        <Image src={SmartImage} alt="smartimage" />
      </motion.div>
      <div className="lg:w-2/5">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-mono"
        >
          Handoff your work smarter now
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 1 }}
          viewport={{ once: true }}
          className="mt-3 font-thin text-gray-700 xl:font-normal xl:text-xl"
        >
          Create documentation for the collaborators (i.e. designers or devs)
          directly in your design file.
        </motion.p>
        <div className="py-5">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.25, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap lg:flex-nowrap justify-center items-center"
          >
            <div className="flex justify-center items-center lg:w-1/2">
              <Image src={Strategy} alt="strategy" />
            </div>
            <div className="mt-[-50px] lg:mt-0 lg:w-1/2 ">
              <h4 className="text-xl font-bold font-mono">Strategic</h4>
              <p className="mt-3 font-thin text-gray-700 xl:font-normal ">
                Suggests that the component spacing between cards and elements.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap lg:flex-nowrap justify-center items-center"
          >
            <div className="flex justify-center items-center lg:w-1/2">
              <Image src={Schedule} alt="schedule" />
            </div>
            <div className="mt-[-50px] lg:mt-0 lg:w-1/2 ">
              <h4 className="text-xl font-bold font-mono">Work Schedule</h4>
              <p className="mt-3 font-thin text-gray-700 xl:font-normal ">
                Work schedule is the time an employee is expected to be on the
                job
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
