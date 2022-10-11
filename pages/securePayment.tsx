import CartComp from "@components/Cart/Cart";
import Header from "@components/Header/Header";
import CreditCardComp from "@components/Payment/CreditCard";
import PaymentOrder from "@components/Payment/Payment";

import { NextPage } from "next";

const Payment: NextPage = () => {
  return (
    <div>
      <Header />
      <CreditCardComp />
    </div>
  );
};

export default Payment;
