import { combineReducers } from "redux";
import { CartReducer } from "./carts/carts.reducer";
import { ProductReducer } from "./products/products.reducer";
import { UsersReducer } from "./users/users.reducer";

export const rootReducer = combineReducers({
  carts: CartReducer,
  products: ProductReducer,
  users: UsersReducer,
});
