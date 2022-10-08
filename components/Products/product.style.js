import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import { light2Color, LightGrey, SecoundColor } from "../../styles/theme";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

export const ProductsBox = styled.div`
  width: 100%;
  height: 90%;
  gap: 80px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;

  .img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBox = styled.div`
  width: 100%;
  padding: 20px;
  height: max-content;
  background-color: ${LightGrey};
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  margin-bottom: 30px;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: white;
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
export const AddProductBoxQuantity = styled.div`
  padding-top: 5px;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  color: ${SecoundColor};
  background-color: ${LightGrey};
  bottom: 0px;
  width: 40px;
  height: 30px;
  cursor: pointer;
  border-radius: 7px;
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
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    color: ${LightGrey};
    background-color: ${SecoundColor};
  }
`;

export const QuantityBox = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 0px;
  bottom: 0;
`;
