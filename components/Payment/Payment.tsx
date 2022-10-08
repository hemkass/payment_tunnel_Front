import { PaymentCartContent, TitleBlock } from "@components/Cart/cart.style";
import OrderSummary from "@components/Cart/OrderSummary";
import { Price, Subtitle, Title } from "@components/Products/product.style";
import { RootState } from "@customTypes/actions.type";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AdressForm from "./AdressForm";
import CheckButton from "./CheckButton";
import { ContactDataBox } from "./form.style";
import MailForm from "./MailForm";
import { PaymentContainer } from "./payment.style";

const PaymentOrder = () => {
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });
  return (
    <PaymentContainer>
      <PaymentCartContent>
        <TitleBlock>Mon Adresse de Livraison</TitleBlock>
        <AdressForm />
        <ContactDataBox>
          <Title>Entrez vos informations de contact*</Title>
          <Price>
            * Uniquement pour le livreur et la confirmation de commande
          </Price>
        </ContactDataBox>
        <MailForm />
        <CheckButton />
      </PaymentCartContent>
      <>{currentCart && <OrderSummary currentCart={currentCart} />}</>
    </PaymentContainer>
  );
};

export default PaymentOrder;
