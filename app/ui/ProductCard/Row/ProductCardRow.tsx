import { Product } from "@/types/product";
import Image from "next/image";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import styles from "./index.module.scss";

type Props = {
  product: Product;
};

export default function ProductCardRow({ product }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.left_side}>
        <div className={styles.card_image_container}>
          <Image src={product.images[0]} fill alt={product.title + " product"} sizes="maxWidth: 320px" />
        </div>

        <div>
          <div className={styles.card_price}>{product.price}</div>
          <div className={styles.card_rating}>
            <span>{product.rating}</span>
            <Rating value={product.rating} readOnly cancel={false} />
          </div>
          <div className={styles.card_title}>{product.title}</div>
          <div className={styles.card_brand}>{product.brand}</div>
        </div>
      </div>
      <div className={styles.card_actions}>
        <Button label="В корзину" icon={"pi pi-shopping-cart"} size="small" />
        <Button outlined icon={"pi pi-heart"} size="small" />
      </div>
    </div>
  );
}
