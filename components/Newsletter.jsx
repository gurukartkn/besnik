import Image from "next/image";

import Text from "../public/assets/text.png";
import VisaGroup from "../public/assets/visa group.png";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h5>Subscribe to get updated news</h5>
        <Image src={Text} alt="text" />
      </div>
      <div>
        <h1>Subscribe Our Newsletter</h1>
        <p>Subscribe</p>
      </div>
      <div>
        <Image src={VisaGroup} alt="visagroup" />
      </div>
    </div>
  );
};

export default Newsletter;
