import CardItem from "@components/modal/CardItems";
import { ProductsCartBox } from "@components/modal/Cart-modal.style";
import {
  CardBox,
  ImageBox,
  Price,
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

export const PaymentContainer = styled.div`
  padding: 5%;
  display: flex;

  gap: 100px;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  height: 100%;
  background-color: ${light2Color};
`;

export const TitleBlock = styled.h2`
  padding: 10px;
  text-align: center;
  font-size: 2.5em;
  color: ${SecoundColor};
  background-color: ${lightColor};
  border-radius: 3px;
`;

export const PaymentCartContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 50px 50px 50px;
  gap: 50px;
  background-color: ${LightGrey};
  width: 50vw;

  ${CardBox} {
    height: 150px;
    width: 100%;
    margin-right: 5px;
  }

  ${ImageBox} {
    background-color: white !important;
    display: flex;
    width: 20%;
    height: 100%;
  }

  ${ProductsCartBox} {
    width: 100%;
  }
`;

export const OrderSummaryStyle = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 100px 50px 50px 50px;
  align-items: center;
  background-color: ${LightGrey};
  width: 30vw;

  ${Price} {
    cursor: pointer;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const LineBreak = styled.div`
  height: 2px;
  width: 100%;
  border-bottom: 1px solid ${light2Color};
`;

export const PaymentButton = styled.button`
  display: flex;
  border-radius: 7px;
  height: 70px;
  padding: 9px 15px 5px 15px;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  background-color: ${SecoundColor};
`;
