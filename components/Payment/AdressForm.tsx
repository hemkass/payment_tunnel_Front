import { useState } from "react";
import { CityBox, ContactForm, InputForm, InputNameBox } from "./form.style";
import FormField from "./FormField";
type PropsAdress = {
  fullname: string;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  postCode: string;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setPostCode: React.Dispatch<React.SetStateAction<string>>;
  adress: string;
  setAdress: React.Dispatch<React.SetStateAction<string>>;
};

const AdressForm = ({
  fullname,
  setFullname,
  country,
  setCountry,
  postCode,
  setPostCode,
  adress,
  setAdress,
  city,
  setCity,
}: PropsAdress) => {
  return (
    <>
      <FormField
        modal={fullname}
        setModal={setFullname}
        type="text"
        title="fullname"
      />
      <FormField
        modal={adress}
        setModal={setAdress}
        type="text"
        title="Adresse 1"
      />
      <CityBox>
        <FormField modal={city} setModal={setCity} type="text" title="ville" />
        <FormField
          modal={postCode}
          setModal={setPostCode}
          type="text"
          title="Code Postal"
        />
      </CityBox>
    </>
  );
};

export default AdressForm;
