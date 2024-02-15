"use client";

import { useCartState } from "@/state/cart.state";
import { Product } from "@/types/product";
import { Button } from "primereact/button";
import { MouseEventHandler } from "react";

export default function CartBtn({ product, className }: { product: Product; className: string }) {
  const { addToCart, removeFromCart, products } = useCartState();

  const isFav = products.find((item) => item.id === product.id);

  const handleClickCartBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    isFav ? removeFromCart(product) : addToCart(product);
  };

  return (
    <Button
      className={className}
      severity={isFav && "warning"}
      icon={"pi pi-shopping-cart"}
      label={isFav ? "In cart" : "Buy"}
      onClick={handleClickCartBtn}
      style={{ background: isFav ? "orange" : "var(--primary-color)" }}
    />
  );
}
