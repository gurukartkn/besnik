import Image from "next/image";

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
        <p>ABOUT</p>
        <p>HOW IT WORKS</p>
        <p>CONTACT</p>
      </div>
      <div className="w-36">
        <Image src={Branding} alt="branding" />
      </div>
      <div className="w-36 flex justify-center items-center gap-3 font-medium font-mono">
        <p>Signup</p>
        <p>Login</p>
        <p>
          <AiOutlineFacebook />
        </p>
        <p>
          <AiOutlineInstagram />
        </p>
        <p>
          <AiOutlineYoutube />
        </p>
      </div>
    </div>
  );
};

export default Footer;
