import { combineReducers } from "redux";
import { CartReducer } from "./carts/carts.reducer";
import { ProductReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
  carts: CartReducer,
  products: ProductReducer,
});
