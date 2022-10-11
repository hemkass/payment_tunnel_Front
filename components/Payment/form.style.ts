import { ProductsCartBox } from "@components/modal/Cart-modal.style";
import {
  CardBox,
  ImageBox,
  Subtitle,
  Title,
} from "@components/Products/product.style";
import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import {
  light2Color,
  lightColor,
  LightGrey,
  MainColor,
  SecoundColor,
} from "../../styles/theme";

export const InputForm = styled.input`
  height: 50px;
  width: 80%;

  border-bottom: solid thin $grey1;
  font-family: "Prompt", sans-serif;
  font-weight: 600;
  font-size: 17px;

  &:placeholder {
    font-family: "Prompt", sans-serif;
    font-weight: 300;
    font-size: 14px;
    padding-left: 15px;
    padding-top: 5px;
    color: ${SecoundColor};
  }
`;

export const ContactDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  gap: 25px;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const InputNameBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 50px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

export const CityBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${InputBox} {
    width: 100%;
    gap: 0;
  }
  ${Subtitle} {
    width: 20%;
  }
  ${InputForm} {
    width: 21vw;
  }
`;
