import Image from "next/image";

import Fire from "../public/assets/fire.png";
import Deal from "../public/assets/deal.png";

const Deals = () => {
  return (
    <div className="p-10 lg:px-20 text-center lg:text-left lg:flex lg:gap-24 ">
      <div className="flex flex-col gap-1">
        <div className="font-mono text-3xl font-bold flex gap-1 items-center justify-center lg:justify-start">
          <h1>Hot</h1>
          <Image src={Fire} alt="fire" />
        </div>
        <h1 className="font-mono text-3xl font-bold">deals for you</h1>
        <p className="mt-4 text-gray-700 font-thin xl:font-normal xl:text-xl">
          Online shopping for retails sales direct to consumers
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:w-3/5 gap-4 lg:gap-16 xl:gap-24 mt-4 md:mt-10">
        <div>
          <Image src={Deal} alt="deal" />
          <h3 className="font-medium">1.5% cashback</h3>
          <p className="text-gray-700 font-thin xl:font-normal xl:text-xl">
            Online shopping for retails sales direct to consumers
          </p>
        </div>
        <div>
          <Image src={Deal} alt="deal" />
          <h3 className="font-medium">30-days term</h3>
          <p className="text-gray-700 font-thin xl:font-normal xl:text-xl">
            Online shopping for retails sales direct to consumers
          </p>
        </div>
        <div>
          <Image src={Deal} alt="deal" />
          <h3 className="font-medium">Save Money</h3>
          <p className="text-gray-700 font-thin xl:font-normal xl:text-xl">
            Online shopping for retails sales direct to consumers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deals;
