import Image from "next/image";

import Customers from "../public/assets/customer.png";

const Customer = () => {
  return (
    <div>
      <h1>1000+ Customers</h1>
      <p>
        Analyze any Business or Creator account—including your competitors—to
        find the imagery, visuals, and captions that drive audience engagement.
        Get social calendars planned faster and spend less time testing content
        strategies.
      </p>
      <Image src={Customers} alt="customerdata" />
    </div>
  );
};

export default Customer;
