import { Reducer } from "redux";
import { CART_TS, PRODUCT_TS, USERFORM_TS } from "../../customTypes/DB.types";
import { UserTypes } from "./users.types";

export type UsersState = {
  usersList?: USERFORM_TS[] | [];
  currentUser?: USERFORM_TS | null;
  error: string;
};

const initialState = {
  usersList: [],
  currentUser: null,
  error: "",
};

export const UsersReducer: Reducer<UsersState> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    //  ------------------------------------------------
    case UserTypes.NEW_USER_FORM:
      if (payload) {
        return {
          ...state,
          currentUser: payload,
        };
      }
    //  --------------------------------------------------

    case UserTypes.SET_CURRENT_USER:
      if (payload) {
        return {
          ...state,
          currentUser: payload,
        };
      }
    //  --------------------------------------------------

    default:
      return state;
  }
};
