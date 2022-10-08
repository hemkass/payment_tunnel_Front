import { Caisse } from "@components/modal/Cart-modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Title } from "@components/Products/product.style";

const CheckButton = () => {
  const router = useRouter();
  return (
    <Caisse
      onClick={() => {
        router.asPath === "/sendOrder" && router.push("/");
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faCreditCard} className="paymentIcon" />
      <Title>valider et procéder au paiement</Title>
    </Caisse>
  );
};

export default CheckButton;
