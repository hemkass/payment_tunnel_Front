import { useState } from "react";
import { ContactForm, InputForm, InputNameBox } from "./form.style";
import FormField from "./FormField";
type PropsContact = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};
const MailForm = ({ email, setEmail, phone, setPhone }: PropsContact) => {
  return (
    <>
      <FormField modal={email} setModal={setEmail} type="text" title="Email" />
      <FormField
        modal={phone}
        setModal={setPhone}
        type="text"
        title="Téléphone"
      />
    </>
  );
};

export default MailForm;
