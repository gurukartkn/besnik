import Image from "next/image";

import Customers from "../public/assets/customer.png";

const Customer = () => {
  return (
    <div className="p-10 lg:p-20 flex flex-col text-center justify-center items-center gap-10">
      <h1 className="text-5xl font-bold font-mono">1000+ Customers</h1>
      <p className="font-thin text-gray-700 xl:font-normal xl:text-xl">
        Analyze any Business or Creator account—including your competitors—to
        find the imagery, visuals, and captions that drive audience engagement.
        Get social calendars planned faster and spend less time testing content
        strategies.
      </p>
      <div className="flex flex-col gap-5 md:hidden">
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            PRODUCT
          </h5>
          <p className="font-medium mt-2">10,000+</p>
        </div>
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            LIKES
          </h5>
          <p className="font-medium mt-2">45600</p>
        </div>
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            SALES
          </h5>
          <p className="font-medium mt-2">576864</p>
        </div>
        <div>
          <h5 className="font-thin text-gray-700 xl:font-normal xl:text-xl">
            CUSTOMERS
          </h5>
          <p className="font-medium mt-2">947444</p>
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={Customers} alt="customerdata" />
      </div>
    </div>
  );
};

export default Customer;
