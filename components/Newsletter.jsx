import Image from "next/image";

import Text from "../public/assets/text.png";
import VisaGroup from "../public/assets/visa group.png";

const Newsletter = () => {
  return (
    <div className="h-[65vh] p-10 lg:px-20 bg-[#41B3F4] text-center flex flex-col justify-center items-center gap-5 lg:flex-row">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h5 className="text-[#414449] font-medium">
          Subscribe to get updated news
        </h5>
        <Image src={Text} alt="text" />
      </div>
      <div className="w-24"></div>
      <div className="mt-5 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl font-bold font-mono">
          Subscribe Our Newsletter
        </h1>
        <p className="p-4 bg-orange-500 text-white">Subscribe</p>
      </div>
      <div className="hidden lg:block">
        <Image src={VisaGroup} alt="visagroup" />
      </div>
    </div>
  );
};

export default Newsletter;
