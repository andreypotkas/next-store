"use client";

import CardContainer from "@/app/ui/CardContainer/CardContainer";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { getFavorites } from "../services/localStorage.service";

export default function Favorites() {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    setProducts(getFavorites());
  }, []);

  return <CardContainer isMain={false} products={products} />;
}
