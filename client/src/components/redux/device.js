import { $authHost, $host } from "../../http/index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit = 6) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const deleteDevice = async (id) => {
  const { data } = await $authHost.delete(`api/device/${id}`, {
    params: {
      id,
    },
  });
  return data;
};

export const updateDevice = async (id, data) => {
  const response = await $authHost.patch(`api/device/${id}`, data, {
    params: {
      id,
    },
  });
  return response;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get(`api/device/${id}`);
  console.log(data);
  return data;
};

export const getCart = async () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  return cart;
};

export const addProductToCart = async (product) => {
  console.log(product);

  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getFavorite = async () => {
  let cart = JSON.parse(localStorage.getItem("favorite"));

  return cart;
};

export const addProductToFavorites = async (product) => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  if (!favorites) {
    favorites = {
      products: [],
    };
  }

  let newProducts = {
    items: product,
  };

  let filteredFavorites = favorites.products.filter(
    (element) => element.items.id === product.id
  );
  if (filteredFavorites.length > 0) {
    favorites.products = favorites.products.filter(
      (element) => element.items.id !== product.id
    );
  } else {
    favorites.products.push(newProducts);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
