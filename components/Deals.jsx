import Image from "next/image";

import Fire from "../public/assets/fire.png";
import Deal from "../public/assets/deal.png";

const Deals = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Hot</h1>
          <Image src={Fire} alt="fire" />
        </div>
        <h1>deals for you</h1>
        <p>Online shopping for retails sales direct to consumers</p>
      </div>
      <div>
        <Image src={Deal} alt="deal" />
        <h3>1.5% cashback</h3>
        <p>Online shopping for retails sales direct to consumers</p>
      </div>
      <div>
        <Image src={Deal} alt="deal" />
        <h3>30-days term</h3>
        <p>Online shopping for retails sales direct to consumers</p>
      </div>
      <div>
        <Image src={Deal} alt="deal" />
        <h3>Save Money</h3>
        <p>Online shopping for retails sales direct to consumers</p>
      </div>
    </div>
  );
};

export default Deals;
