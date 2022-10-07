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
};
