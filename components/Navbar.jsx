import Image from "next/image";

import Branding from "../public/assets/Besnik.png";
import Bag from "../public/assets/bag.png";

const Navbar = () => {
  return (
    <nav className="flex p-5 items-center justify-between md:p-10 lg:p-20">
      <div className="hidden lg:flex gap-5 xl:gap-8 font-medium font-mono w-1/3s">
        <p>ABOUT</p>
        <p>HOW IT WORKS</p>
        <p>CONTACT</p>
      </div>
      <div className="lg:w-1/3">
        <Image src={Branding} alt="Besnik" />
      </div>
      <div>
        <Image src={Bag} alt="Bag" />
      </div>
    </nav>
  );
};

export default Navbar;
