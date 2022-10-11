import { ProductState } from "@store/products/products.reducer";
import { UsersState } from "@store/users/users.reducer";
import { CartState } from "../store/carts/carts.reducer";

export interface Action<P> {
  type: string;
  payload: P;
}

export interface ActionWithoutPayload {
  type: string;
}

export type RootState = {
  readonly carts: CartState;
  readonly products: ProductState;
  readonly users: UsersState;
};
