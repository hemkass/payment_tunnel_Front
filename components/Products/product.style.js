import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import { light2Color, LightGrey, SecoundColor } from "../../styles/theme";
export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProductsBox = styled.div`
  width: 90%;
  height: 90%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;
  background-color: blue;
`;

export const CardBox = styled.div`
  width: 80%;
  height: max-content;
  background-color: ${light2Color};
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 30px;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${SecoundColor};
`;

export const Subtitle = styled.h3`
  text-align: center;
  color: ${SecoundColor};
`;
export const Price = styled.h4`
  text-align: center;
  color: ${SecoundColor};
`;

export const AddProductBox = styled.div`
  padding-top: 5px;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  color: ${SecoundColor};
  background-color: ${LightGrey};
  bottom: 0px;
  width: 40px;
  height: 30px;

  border-radius: 7px;
`;

export const QuantityBox = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 0px;
  bottom: 0;
`;
