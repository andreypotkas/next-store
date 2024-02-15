"use client";
import { Product } from "@/types/product";

export const getFavorites = (): Product[] => {
  if (typeof window !== "undefined") {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  }

  return [];
};

export const addToFavorites = (product: Product): void => {
  if (typeof window !== "undefined") {
    let favorites = getFavorites();
    if (!favorites.find((item) => item.id === product.id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
};

export const removeFromFavorites = (product: Product): void => {
  if (typeof window !== "undefined") {
    let favorites = getFavorites();
    const index = favorites.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
};

export const isFavorite = (product: Product): boolean => {
  if (typeof window !== "undefined") {
    const favorites = getFavorites();
    return !!favorites.find((item) => item.id === product.id);
  }
  return false;
};

export const getCart = (): Product[] => {
  if (typeof window !== "undefined") {
    const Cart = localStorage.getItem("Cart");
    return Cart ? JSON.parse(Cart) : [];
  }

  return [];
};

export const addToCart = (product: Product): void => {
  if (typeof window !== "undefined") {
    let Cart = getCart();
    if (!Cart.find((item) => item.id === product.id)) {
      Cart.push(product);
      localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  }
};

export const removeFromCart = (product: Product): void => {
  if (typeof window !== "undefined") {
    let Cart = getCart();
    const index = Cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      Cart.splice(index, 1);
      localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  }
};

export const isInCart = (product: Product): boolean => {
  if (typeof window !== "undefined") {
    const Cart = getCart();
    return !!Cart.find((item) => item.id === product.id);
  }
  return false;
};
