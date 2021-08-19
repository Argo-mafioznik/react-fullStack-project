import { CART, FAVORITES } from "../types";

const initialState = {
  cart: {},
  favorites: {},
};

export const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART:
      return { ...state, cart: state.cart.concat([action.payload]) };

    case FAVORITES:
      return { ...state, favorites: state.favorites.concat([action.payload]) };

    default:
      return state;
  }
};
