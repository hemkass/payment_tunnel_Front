import styled from "styled-components";
import {
  lightColor,
  LightGrey,
  MainColor,
  SecoundColor,
} from "../../styles/theme";

import { Title } from "../Products/product.style";

export const Modal = styled.div`
  position: absolute;
  left: -50px;
  top: 0px;
  z-index: 10;
  width: 100vw;
  height: 300%;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  margin: 80px 50px 0px auto;
  position: relative;

  width: 22vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  background-color: whitesmoke;
  border-radius: 15px;

  .closeIcon {
    width: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  ${Title} {
  }
`;
export const ProductsCartBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  overflow: auto;
`;
export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

export const Icon = styled.div`
  height: 30px;
  width: 30px;
  color: ${lightColor};
`;

export const Caisse = styled.button`
  display: flex;
  border-radius: 7px;
  height: 70px;
  padding: 9px 15px 5px 15px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  background-color: ${SecoundColor};

  .paymentIcon {
    text-align: center;
    color: ${LightGrey};
    width: 30px;
    height: 30px;
  }

  ${Title} {
    display: flex;
    align-items: center;
    color: ${LightGrey};
  }

  &:hover {
    background-color: ${LightGrey};
    ${Title} {
      color: ${SecoundColor};
    }
  }
`;
