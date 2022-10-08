import PaymentButtonComp from "@components/modal/PaymentButton";
import { Price, Subtitle, Title } from "@components/Products/product.style";
import { CART_TS } from "@customTypes/DB.types";
import { useRouter } from "next/router";
import {
  LineBreak,
  OrderSummaryStyle,
  TitleBlock,
  TotalRow,
} from "./cart.style";

const OrderSummary = ({ currentCart }: { currentCart: CART_TS }) => {
  const router = useRouter();
  return (
    <OrderSummaryStyle>
      <TitleBlock>Recapitulatif de la commande</TitleBlock>
      <TotalRow>
        <Subtitle>Sous-Total</Subtitle>
        <Title>{currentCart.total} €</Title>
      </TotalRow>
      <LineBreak></LineBreak>
      <TotalRow>
        <Subtitle>Frais de livraison</Subtitle>
        <Title>{currentCart.delivery_fees} €</Title>
      </TotalRow>
      <LineBreak></LineBreak>
      <TotalRow>
        <Title>TOTAL</Title>
        <Title>
          {Number(currentCart.total) + Number(currentCart.delivery_fees)} €
        </Title>
      </TotalRow>
      <LineBreak></LineBreak>
      <PaymentButtonComp currentCart={currentCart}></PaymentButtonComp>
      <Price
        onClick={() => {
          router.push("/");
        }}
      >
        modifier mes achats
      </Price>
    </OrderSummaryStyle>
  );
};

export default OrderSummary;
