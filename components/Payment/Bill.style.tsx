import { CardItemStyle } from "@components/modal/cardItems.style";
import { ProductsCartBox } from "@components/modal/Cart-modal.style";
import {
  CardBox,
  ImageBox,
  Price,
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

export const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  position: relative;
  ${CardItemStyle} {
    align-items: center;
  }
  ${CardBox} {
    display: flex;
    gap: 50px;
    flex-direction: row;
  }

  ${Price} {
    display: flex;
    align-items: center;
  }
`;
