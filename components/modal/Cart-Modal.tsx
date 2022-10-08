import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Caisse,
  Modal,
  ModalContent,
  ProductsCartBox,
  TitleBox,
} from "./Cart-modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark, faCreditCard } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { RootState } from "../../customTypes/actions.type";
import { Price, Title } from "../Products/product.style";
import { PRODUCT_ON_CART_TS } from "../../customTypes/DB.types";
import React from "react";
import CartContent from "./CartContent";
import PaymentButton from "./PaymentButton";
import PaymentButtonComp from "./PaymentButton";

type Props = {
  modal?: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

interface ProductProps {
  product: PRODUCT_ON_CART_TS;
}
/* Modal d'affichage du panier dans le Header */
const CartModal = ({ setModal }: Props) => {
  let id: string;

  const [cart, setCart] = useState(null);
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });
  return (
    <Modal>
      {" "}
      {currentCart?.total && (
        <ModalContent>
          <FontAwesomeIcon
            icon={faXmark}
            className="closeIcon"
            onClick={() => setModal(false)}
          />{" "}
          <TitleBox>
            <Title>Mon Panier d'achat</Title>
          </TitleBox>
          <CartContent currentCart={currentCart} />
          <PaymentButtonComp currentCart={currentCart}></PaymentButtonComp>
        </ModalContent>
      )}
    </Modal>
  );
};

export default CartModal;
