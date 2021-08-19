import {
  CREATE_TYPE,
  FETCH_TYPES,
  CREATE_BRAND,
  FETCH_BRANDS,
  CREATE_DEVICE,
  FETCH_DEVICES,
  FETCH_ONE_DEVICE,
  REGISTRATION,
  LOGIN,
  CHECK,
  CART,
  FAVORITES,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_FAVORITE,
} from "../types";

export function createType(type) {
  return {
    type: CREATE_TYPE,
    payload: type,
  };
}

export function fetchTypes() {
  return {
    type: FETCH_TYPES,
  };
}

export function createBrand(brand) {
  return {
    type: CREATE_BRAND,
    payload: brand,
  };
}

export function fetchBrands() {
  return {
    type: FETCH_BRANDS,
  };
}

export function createDevice(device) {
  return {
    type: CREATE_DEVICE,
    payload: device,
  };
}

export function fetchDevices(typeId, brandId, page, limit = 5) {
  return {
    type: FETCH_DEVICES,
    payload: {
      typeId,
      brandId,
      page,
      limit,
    },
  };
}

export function fetchOneDevice(id) {
  return {
    type: FETCH_ONE_DEVICE,
    payload: id,
  };
}

export function registration(email, password) {
  return {
    type: REGISTRATION,
    payload: {
      email,
      password,
    },
  };
}

export function login(email, password) {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
    },
  };
}

export function check() {
  return {
    type: CHECK,
  };
}

export function cart(cart) {
  return {
    type: CART,
    payload: cart,
  };
}

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
}

export function favorites(favorite) {
  return {
    type: FAVORITES,
    payload: favorite,
  };
}

export function addProductToFavorite(product) {
  return {
    type: ADD_PRODUCT_TO_FAVORITE,
    payload: product,
  };
}
