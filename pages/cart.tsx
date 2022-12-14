import CartComp from "@components/Cart/Cart";
import Header from "@components/Header/Header";
import Payment from "@components/Payment/Payment";
import { NextPage } from "next";

const Cart: NextPage = () => {
  return (
    <div>
      <Header />
      <CartComp />
    </div>
  );
};

export default Cart;
