import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "@customTypes/actions.type";
import { CART_TS } from "@customTypes/DB.types";
import CheckOutForm from "./checkoutForm";

const CheckOut = () => {
  const stripePromise = loadStripe(
    "pk_test_51K74SvJYgfuiWVYxuH1ERtbOs0LGuwtZtHjoLwM250L9G2adQK2kcSmKIuzZR9sBHG99izVgLhVVwUDZRClZzbgO00Qooys82I"
  );

  /* const { cart, Total, subTotal, deliveryFees } = location.state; */
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });
  const currentUser = useSelector((state: RootState) => {
    return state.users.currentUser;
  });

  return currentCart && currentUser ? (
    <div>
      <div>
        <h3>Mode de paiement</h3>
      </div>
      <div className="stripe">
        <Elements stripe={stripePromise}>
          <CheckOutForm user={currentUser} cart={currentCart} />
        </Elements>
      </div>
    </div>
  ) : (
    <div>en chargement</div>
  );
};

export default CheckOut;
