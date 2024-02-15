"use client";

import CardContainer from "@/app/ui/CardContainer/CardContainer";
import styles from "@/styles/home.module.scss";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { getFavorites } from "../services/localStorage.service";

export default function Favorites() {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    setProducts(getFavorites());
  }, []);

  return (
    <div className={styles.page_container}>
      <h2 className={styles.title}>Favorites</h2>
      <CardContainer isMain={false} products={products} />
    </div>
  );
}
