import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import { light2Color, LightGrey, SecoundColor } from "../../styles/theme";
import {
  AddProductBox,
  CardBox,
  ImageBox,
  QuantityBox,
} from "../Products/product.style";
export const ProductContainerCart = styled.div``;

export const CardItemStyle = styled.div`
  display: flex;
  position: relative;
  ${ImageBox} {
    background-color: white !important;
    display: flex;
    width: 20%;
    height: 20%;
  }
  ${CardBox} {
    display: flex;
    gap: 15px;
    flex-direction: row;
  }
  ${QuantityBox} {
    right: 10%;
    bottom: 10%;

    ${AddProductBox} {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;
