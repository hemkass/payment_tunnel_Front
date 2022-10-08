import { useState } from "react";
import { ContactForm, InputForm, InputNameBox } from "./form.style";
import FormField from "./FormField";

const MailForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <ContactForm>
      <FormField modal={email} setModal={setEmail} type="text" title="Email" />
      <FormField
        modal={phone}
        setModal={setPhone}
        type="text"
        title="Téléphone"
      />
    </ContactForm>
  );
};

export default MailForm;
