import Image from "next/image";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

import Branding from "../public/assets/Besnik.png";

const Footer = () => {
  return (
    <div>
      <div>
        <p>ABOUT</p>
        <p>HOW IT WORKS</p>
        <p>CONTACT</p>
      </div>
      <div>
        <Image src={Branding} alt="branding" />
      </div>
      <div>
        <p>Signup</p>
        <p>Login</p>
        <AiOutlineFacebook />
        <AiOutlineInstagram />
        <AiOutlineYoutube />
      </div>
    </div>
  );
};

export default Footer;
