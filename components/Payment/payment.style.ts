import { Caisse, ProductsCartBox } from "@components/modal/Cart-modal.style";
import { CardBox, ImageBox, Title } from "@components/Products/product.style";
import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import {
  light2Color,
  lightColor,
  LightGrey,
  MainColor,
  SecoundColor,
} from "../../styles/theme";

export const PaymentContainer = styled.div`
  padding: 5%;
  display: flex;

  gap: 100px;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  height: 100%;
  background-color: ${light2Color};

  ${Caisse} {
    width: 50%;
  }
`;
