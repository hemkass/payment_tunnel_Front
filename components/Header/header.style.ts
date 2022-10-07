import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import {
  Black2,
  light2Color,
  LightGrey,
  SecoundColor,
} from "../../styles/theme";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80px;
  background-color: red;
`;

export const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: blue;
`;
