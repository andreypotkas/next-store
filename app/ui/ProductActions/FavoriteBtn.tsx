"use client";

import { useFavoriteState } from "@/state/favorites.state";
import { Product } from "@/types/product";
import { Button } from "primereact/button";
import { MouseEventHandler } from "react";

export default function FavoriteBtn({ product, className }: { product: Product; className: string }) {
  const { addToFavorite, removeFromFavorites, products } = useFavoriteState();
  const isFav = products.find((item) => item.id === product.id);

  const handleClickFavoriteBtn: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    isFav ? removeFromFavorites(product) : addToFavorite(product);
  };

  return <Button className={className} icon={isFav ? "pi pi-heart-fill" : "pi pi-heart"} outlined onClick={handleClickFavoriteBtn} />;
}
