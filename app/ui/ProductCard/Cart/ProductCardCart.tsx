"use client";

import { useCartState } from "@/state/cart.state";
import { Product } from "@/types/product";
import { XCircle } from "lucide-react";
import Image from "next/image";
import { Rating } from "primereact/rating";
import styles from "./index.module.scss";

type Props = {
  product: Product;
};

export default function ProductCardCart({ product }: Props) {
  const { removeFromCart } = useCartState();

  const handleClickClose = () => removeFromCart(product);
  return (
    <div className={styles.card}>
      <div className={styles.left_side}>
        <div className={styles.card_image_container}>
          <Image src={product.images[0]} fill alt={product.title + " product"} sizes="maxWidth: 320px" />
        </div>

        <div>
          <div className={styles.card_price}>
            <span>${product.price} USD</span>
            <XCircle onClick={handleClickClose} />
          </div>
          <div className={styles.card_title}>{product.title}</div>
          <div className={styles.card_rating}>
            <span>{product.rating}</span>
            <Rating value={product.rating} readOnly cancel={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
