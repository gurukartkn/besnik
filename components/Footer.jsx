import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

import Branding from "../public/assets/Besnik.png";

const Footer = () => {
  return (
    <div className="p-10 lg:p-20 text-center flex flex-wrap justify-center lg:justify-around items-center gap-10">
      <div className="w-36 lg:w-auto flex flex-wrap justify-center items-center gap-5 font-medium font-mono">
        <p className="cursor-pointer">ABOUT</p>
        <p className="cursor-pointer">HOW IT WORKS</p>
        <p className="cursor-pointer">CONTACT</p>
      </div>
      <div className="w-36 cursor-pointer">
        <Link href="#">
          <Image src={Branding} alt="branding" />
        </Link>
      </div>
      <div className="w-36 flex justify-center items-center gap-3 font-medium font-mono">
        <p className="cursor-pointer">Signup</p>
        <p className="cursor-pointer">Login</p>
        <p className="cursor-pointer">
          <AiOutlineFacebook />
        </p>
        <p className="cursor-pointer">
          <AiOutlineInstagram />
        </p>
        <p className="cursor-pointer">
          <AiOutlineYoutube />
        </p>
      </div>
    </div>
  );
};

export default Footer;
