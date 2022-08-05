import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";

import Card from "../public/assets/visa card.png";
import Icons from "../public/assets/icons.png";

const Hero = () => {
  return (
    <div className="p-10 lg:px-20 text-center lg:text-left lg:flex gap-5 h-[35vh] xl:h-[50vh]">
      <div className="flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start lg:w-1/2 xl:pt-24">
        <h1 className="font-mono font-bold text-5xl xl:font-extrabold xl:text-7xl">
          Banking more smart
        </h1>
        <p className="text-gray-700 font-thin xl:font-normal xl:text-xl">
          Meet the only spend management platform and corporate card
        </p>
        <div className="p-3 bg-black md:w-42 text-white items-center flex gap-3">
          <AiOutlineArrowRight />
          <h3 className="font-medium text-center">Get you card</h3>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2">
        <div className="flex items-center justify-center bg-blue-300 w-4/5 relative">
          <Image src={Card} alt="Card" />
        </div>
        <div className="bg-yellow-300 flex items-center justify-center">
          <Image src={Icons} alt="Icons" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
