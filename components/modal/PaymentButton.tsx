import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Caisse } from "./Cart-modal.style";
import { Title } from "@components/Products/product.style";
import { CART_TS } from "@customTypes/DB.types";

const PaymentButtonComp = ({ currentCart }: { currentCart: CART_TS }) => {
  const router = useRouter();
  return (
    <>
      {" "}
      <Caisse
        onClick={() => {
          router.asPath === "/cart"
            ? router.push("/sendOrder")
            : router.push("/cart");
        }}
      >
        {" "}
        <FontAwesomeIcon icon={faCreditCard} className="paymentIcon" />
        <Title>
          {" "}
          {router.asPath === "/cart" ? (
            "Acheter sans s'inscrire"
          ) : (
            <>Paiement</>
          )}
        </Title>
        <Title>{currentCart.total} €</Title>
      </Caisse>
    </>
  );
};

export default PaymentButtonComp;
