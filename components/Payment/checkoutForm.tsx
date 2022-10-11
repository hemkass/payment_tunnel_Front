import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

import { CART_TS, USER_PAYMENT_TS } from "@customTypes/DB.types";
import Bill from "./Bill";

const CheckOutForm = ({
  user,
  cart,
}: {
  cart: CART_TS;
  user: USER_PAYMENT_TS;
}) => {
  const [isPaid, setIsPaid] = useState(false);
  const [response, setResponse] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  let Total = Number(cart.total).toFixed(2);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      let stripeResponse;

      // On récupère ici les données bancaires que l'utilisateur rentre
      if (elements) {
        const cardElement = elements.getElement(CardElement);
        if (stripe && cardElement) {
          stripeResponse = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
          });

          let response;
          console.log("stripe Respose", stripeResponse.paymentMethod);
          if (stripeResponse) {
            /* On envoie les infos que l'on veut sauvegarder en BDD pour afficher dans le back Office */
            response = await axios.post(
              "http://localhost:4000/stripe/createCharge",
              {
                amount: Total,
                fullname: user.fullname,

                email: user.email,
                tel: user.phone,
                cart: cart,
                userId: user.id,
                paymentMethode: stripeResponse.paymentMethod,
              }
            );
          }
          console.log("response from back", response);
          /* Si le paiement est accepté, on supprime le panier et on renvoie vers la page produit */
          if (response?.data.stripe === "succeeded") {
            console.log("reçu du back", response.data);
            setResponse(response.data.paymentId);
            setIsPaid(true);
            alert("paiement accepté");

            /*   navigate("/products"); */
          } else {
            alert("Une erreur est survenue, veuillez réssayer.");
          }
        }
      }
    } catch (error) {
      /*    if (error?.response.status === 428) {
        alert("Merci de remplir vos informations personnelles");
      } else {
        console.log(error.message);
      } */
    }
  };

  return isPaid && response ? (
    <div>
      <Bill paymentData={response} />
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="Checkout-button" type="submit" disabled={!stripe}>
        <div className="icon-lock"></div>
        <div>Payer</div>
      </button>
    </form>
  );
};

export default CheckOutForm;
