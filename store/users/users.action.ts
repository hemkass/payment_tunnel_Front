import { Action } from "../../customTypes/actions.type";
import { CART_TS, PRODUCT_TS, USERFORM_TS } from "../../customTypes/DB.types";

import { UserTypes } from "./users.types";

export type NewUserAction = Action<USERFORM_TS>;

export const NewUserForm = (payload: USERFORM_TS) => {
  console.log("ACTION PRODUCT =====>", payload);
  return { type: UserTypes.NEW_USER_FORM, payload };
};

export const SetCurrentUser = (payload: USERFORM_TS) => {
  console.log("ACTION PRODUCT =====>", payload);
  return { type: UserTypes.SET_CURRENT_USER, payload };
};
