import { LineBreak } from "@components/Cart/cart.style";
import { Subtitle } from "@components/Products/product.style";
import { InputBox, InputForm } from "./form.style";

type PropsField = {
  type: string;
  title?: string;
  modal?: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
};

const FormField = ({ type, modal, setModal, title }: PropsField) => {
  return (
    <>
      <InputBox>
        <Subtitle>
          <label>{title} : </label>
        </Subtitle>
        <InputForm
          onChange={(event) => setModal(event.target.value)}
          type={type}
          placeholder={modal}
          value={modal}
          required
        ></InputForm>
      </InputBox>
      <LineBreak></LineBreak>
    </>
  );
};

export default FormField;
