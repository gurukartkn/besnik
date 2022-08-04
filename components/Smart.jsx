import Image from "next/image";

import SmartImage from "../public/assets/card.png";
import Strategy from "../public/assets/strategy.png";
import Schedule from "../public/assets/schedule.png";

const Smart = () => {
  return (
    <div>
      <div>
        <Image src={SmartImage} alt="smartimage" />
      </div>
      <div>
        <h2>Handoff your work smarter now</h2>
        <p>
          Create documentation for the collaborators (i.e. designers or devs)
          directly in your design file.
        </p>
        <div>
          <div>
            <Image src={Strategy} alt="strategy" />
            <h4>Strategic</h4>
            <p>
              Suggests that the component spacing between cards and elements.
            </p>
          </div>
          <div>
            <Image src={Schedule} alt="schedule" />
            <h4>Work Schedule</h4>
            <p>
              Work schedule is the time an employee is expected to be on the job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
