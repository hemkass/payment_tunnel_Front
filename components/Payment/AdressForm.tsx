import { useState } from "react";
import { ContactForm, InputForm, InputNameBox } from "./form.style";
import FormField from "./FormField";

const AdressForm = () => {
  const [fullName, setFullName] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [postCode, setPostCode] = useState("");

  return (
    <ContactForm>
      <FormField
        modal={fullName}
        setModal={setFullName}
        type="text"
        title="fullname"
      />
      <FormField
        modal={adress}
        setModal={setAdress}
        type="text"
        title="Adresse 1"
      />
      <FormField modal={city} setModal={setCity} type="text" title="ville" />
    </ContactForm>
  );
};

export default AdressForm;
