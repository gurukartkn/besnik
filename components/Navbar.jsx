import Image from "next/image";

import Branding from "../public/assets/Besnik.png";
import Bag from "../public/assets/bag.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <p>ABOUT</p>
        <p>HOW IT WORKS</p>
        <p>CONTACT</p>
      </div>
      <div>
        <Image src={Branding} alt="Besnik" />
      </div>
      <div>
        <Image src={Bag} alt="Bag" />
      </div>
    </nav>
  );
};

export default Navbar;
