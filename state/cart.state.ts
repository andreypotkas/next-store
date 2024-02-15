import { addToCart, removeFromCart } from "@/app/services/localStorage.service";
import { Product } from "@/types/product";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type UseCart = {
  products: Product[];
  setCartProducts: (products: Product[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

export const useCartState = create<UseCart, [["zustand/immer", never]]>(
  immer((set) => ({
    products: [],
    setCartProducts: (products) => {
      set((state) => {
        state.products = products;
      });
    },
    addToCart: (product) => {
      set((state) => {
        state.products = [...state.products, product];
        addToCart(product);
      });
    },
    removeFromCart: (product) => {
      set((state) => {
        state.products = state.products.filter((item: Product) => item.id !== product.id);
        removeFromCart(product);
      });
    },
    clearCart: () => {
      set((state) => {
        state.products = [];
      });
    },
  }))
);
