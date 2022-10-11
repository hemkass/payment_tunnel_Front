import { PaymentCartContent, TitleBlock } from "@components/Cart/cart.style";
import OrderSummary from "@components/Cart/OrderSummary";

import { RootState } from "@customTypes/actions.type";
import { useSelector } from "react-redux";
import CheckOut from "./checkout";
import { PaymentContainer } from "./payment.style";

const CreditCardComp = () => {
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });
  return (
    <PaymentContainer>
      {currentCart && (
        <>
          <PaymentCartContent>
            <TitleBlock>Page de paiement sécurisé</TitleBlock>
            <CheckOut />
          </PaymentCartContent>
          <>{currentCart && <OrderSummary currentCart={currentCart} />}</>
        </>
      )}
    </PaymentContainer>
  );
};

export default CreditCardComp;
