import { addToFavorites, removeFromFavorites } from "@/app/services/localStorage.service";
import { Product } from "@/types/product";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type UseFavorite = {
  products: Product[];
  setFavoriteProducts: (products: Product[]) => void;
  addToFavorite: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
  clearFavorites: () => void;
};

export const useFavoriteState = create<UseFavorite, [["zustand/immer", never]]>(
  immer((set) => ({
    products: [],
    setFavoriteProducts: (products) => {
      set((state) => {
        state.products = products;
      });
    },
    addToFavorite: (product) => {
      set((state) => {
        state.products = [...state.products, product];
        addToFavorites(product);
      });
    },
    removeFromFavorites: (product) => {
      set((state) => {
        state.products = state.products.filter((item: Product) => item.id !== product.id);
        removeFromFavorites(product);
      });
    },
    clearFavorites: () => {
      set((state) => {
        state.products = [];
      });
    },
  }))
);
