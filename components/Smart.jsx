import Image from "next/image";

import SmartImage from "../public/assets/card.png";
import Strategy from "../public/assets/strategy.png";
import Schedule from "../public/assets/schedule.png";

const Smart = () => {
  return (
    <div className="p-10 lg:p-20 text-center lg:flex lg:text-left">
      <div className="hidden lg:block lg:w-2/3">
        <Image src={SmartImage} alt="smartimage" />
      </div>
      <div className="lg:w-1/3">
        <h2 className="text-3xl font-bold font-mono">
          Handoff your work smarter now
        </h2>
        <p className="mt-3 font-thin text-gray-700 xl:font-normal xl:text-xl">
          Create documentation for the collaborators (i.e. designers or devs)
          directly in your design file.
        </p>
        <div className="py-5">
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex justify-center items-center lg:w-1/2">
              <Image src={Strategy} alt="strategy" />
            </div>
            <div className="mt-[-50px] lg:mt-0 lg:w-1/2 ">
              <h4 className="text-xl font-bold font-mono">Strategic</h4>
              <p className="mt-3 font-thin text-gray-700 xl:font-normal ">
                Suggests that the component spacing between cards and elements.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="flex justify-center items-center lg:w-1/2">
              <Image src={Schedule} alt="schedule" />
            </div>
            <div className="mt-[-50px] lg:mt-0 lg:w-1/2 ">
              <h4 className="text-xl font-bold font-mono">Work Schedule</h4>
              <p className="mt-3 font-thin text-gray-700 xl:font-normal ">
                Work schedule is the time an employee is expected to be on the
                job
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
