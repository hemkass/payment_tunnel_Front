import CartContent from "@components/modal/CartContent";
import { RootState } from "@customTypes/actions.type";
import axios from "axios";

import {
  LineBreak,
  OrderSummaryStyle,
  PaymentButton,
  PaymentCartContent,
  PaymentContainer,
  TitleBlock,
  TotalRow,
} from "./cart.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCart } from "@store/carts/carts.action";
import { Price, Subtitle, Title } from "@components/Products/product.style";
import { current } from "@reduxjs/toolkit";
import { Caisse } from "@components/modal/Cart-modal.style";
import { useRouter } from "next/router";
import PaymentButtonComp from "@components/modal/PaymentButton";
import OrderSummary from "./OrderSummary";

const CartComp = () => {
  const router = useRouter();
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  console.log(currentCart);
  return (
    <PaymentContainer>
      {currentCart ? (
        <>
          <PaymentCartContent>
            <TitleBlock>Mon Panier</TitleBlock>
            <CartContent currentCart={currentCart} />
          </PaymentCartContent>
          <OrderSummary currentCart={currentCart} />
        </>
      ) : (
        <div>Payment </div>
      )}
    </PaymentContainer>
  );
};

export default CartComp;
