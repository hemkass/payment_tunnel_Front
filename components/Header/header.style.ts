import styled from "styled-components";
import { h1, h3 } from "../../styles/global.style";
import {
  Black2,
  light2Color,
  LightGrey,
  SecoundColor,
} from "../../styles/theme";
import { Icon } from "../modal/Cart-modal.style";

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
`;

export const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 60px;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  .cartIcon {
    height: 30px;
    width: 30px;
    color: ${SecoundColor};
  }
`;
