import { RootState } from "../../customTypes/actions.type";

export const myCart = (state: RootState) => {
  return state.carts.currentCart;
};
