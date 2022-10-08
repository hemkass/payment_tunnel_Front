import CartComp from "@components/Cart/Cart";
import Header from "@components/Header/Header";
import PaymentOrder from "@components/Payment/Payment";

import { NextPage } from "next";

const Payment: NextPage = () => {
  return (
    <div>
      <Header />
      <PaymentOrder></PaymentOrder>
    </div>
  );
};

export default Payment;
