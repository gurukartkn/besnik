import Image from "next/image";

import { motion } from "framer-motion";

import Customers from "../public/assets/customer.png";

const Customer = () => {
  return (
    <div className="p-10 lg:p-20 xl:px-36 flex flex-col text-center justify-center items-center gap-10">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.25, duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold font-mono"
      >
        1000+ Customers
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 1 }}
        viewport={{ once: true }}
        className="font-thin text-gray-700 xl:font-normal xl:text-xl"
      >
        Analyze any Business or Creator account—including your competitors—to
        find the imagery, visuals, and captions that drive audience engagement.
        Get social calendars planned faster and spend less time testing content
        strategies.
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 md:hidden"
      >
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            PRODUCT
          </h5>
          <p className="font-medium mt-2">10,000+</p>
        </div>
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            LIKES
          </h5>
          <p className="font-medium mt-2">45600</p>
        </div>
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            SALES
          </h5>
          <p className="font-medium mt-2">576864</p>
        </div>
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            CUSTOMERS
          </h5>
          <p className="font-medium mt-2">947444</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
        viewport={{ once: true }}
        className="hidden md:block"
      >
        <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.25 }}>
          <Image src={Customers} alt="customerdata" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Customer;
