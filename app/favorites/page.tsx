"use client";

import CardContainer from "@/app/ui/CardContainer/CardContainer";
import { Product } from "@/types/product";
import { Suspense, useState } from "react";
import { getFavorites } from "../services/localStorage.service";

export default function Favorites() {
  const [products, setProducts] = useState(getFavorites() as Product[]);

  return (
    <Suspense>
      <CardContainer isMain={false} products={products} />
    </Suspense>
  );
}
