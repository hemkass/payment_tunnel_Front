import { PaymentCartContent, TitleBlock } from "@components/Cart/cart.style";
import OrderSummary from "@components/Cart/OrderSummary";
import { Price, Subtitle, Title } from "@components/Products/product.style";
import { RootState } from "@customTypes/actions.type";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AdressForm from "./AdressForm";
import CheckButton from "./CheckButton";
import { ContactDataBox, ContactForm } from "./form.style";
import MailForm from "./MailForm";
import { PaymentContainer } from "./payment.style";
import { useState } from "react";
import axios from "axios";
import { NewUserForm } from "@store/users/users.action";

const PaymentOrder = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [postCode, setPostCode] = useState("");

  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
    } catch (error: any) {
      console.log({ message: error.message });
    }
    const response = await axios.post("http://localhost:4000/users/addOwner", {
      email: `${email}`,
      cartId: currentCart?.id,
      fullname: `${fullname}`,
      phone: `${phone}`,
      adress_Delivery: {
        adress: `${adress}`,
        postcode: `${postCode}`,
        city: `${city}`,
        country: `${country}`,
      },
    });
    console.log("response", response.status, response.data);

    if (response.status === 201) {
      console.log("response ok en 201");
      dispatch(NewUserForm(response.data));
    }
  };

  return (
    <PaymentContainer>
      {currentCart && (
        <>
          <PaymentCartContent>
            <ContactForm onSubmit={handleSubmit}>
              <TitleBlock>Mon Adresse de Livraison</TitleBlock>
              <AdressForm
                fullname={fullname}
                setFullname={setFullname}
                adress={adress}
                setAdress={setAdress}
                country={country}
                setCountry={setCountry}
                postCode={postCode}
                setPostCode={setPostCode}
                city={city}
                setCity={setCity}
              />
              <ContactDataBox>
                <Title>Entrez vos informations de contact*</Title>
                <Price>
                  * Uniquement pour le livreur et la confirmation de commande
                </Price>
              </ContactDataBox>
              <MailForm
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
              />
              <CheckButton />
            </ContactForm>
          </PaymentCartContent>
          <>{currentCart && <OrderSummary currentCart={currentCart} />}</>
        </>
      )}
    </PaymentContainer>
  );
};

export default PaymentOrder;
