import Image from "next/image";

import Card from "../public/assets/visa card.png";
import Bg from "../public/assets/bg.png";
import Text from "../public/assets/text.png";
import Icons from "../public/assets/icons.png";

const Hero = () => {
  return (
    <div>
      <div>
        <h1>Banking more smart</h1>
        <p>Meet the only spend management platform and corporate card</p>
        <div>
          {/* icon */}
          <h3>Get you card</h3>
        </div>
      </div>
      <div>
        <Image src={Card} alt="Card" />
        <Image src={Bg} alt="Bg" />
        <Image src={Text} alt="Text" />
        <Image src={Icons} alt="Icons" />
      </div>
    </div>
  );
};

export default Hero;
