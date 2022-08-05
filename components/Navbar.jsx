import Image from "next/image";

import { motion } from "framer-motion";

import Branding from "../public/assets/Besnik.png";
import Bag from "../public/assets/bag.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex p-5 items-center justify-between md:p-10 lg:p-20 xl:px-36"
    >
      <div className="hidden lg:flex gap-5 xl:gap-8 font-medium font-mono w-1/3s">
        <p className="cursor-pointer">ABOUT</p>
        <p className="cursor-pointer">HOW IT WORKS</p>
        <p className="cursor-pointer">CONTACT</p>
      </div>
      <div className="lg:w-1/3 cursor-pointer">
        <Image src={Branding} alt="Besnik" />
      </div>
      <div className="cursor-pointer">
        <Image src={Bag} alt="Bag" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
