import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import styles from "./index.module.scss";

type Props = {
  product: Product;
};

export default function ProductCardLg({ product }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <Image src={product.images[0]} fill alt={product.title + " product"} sizes="maxWidth: 320px" />
      </div>
      <div className={styles.card_info_container}>
        <div className={styles.card_info_container_title}>{product.title}</div>
        <div className={styles.card_info_container_brand}>{product.brand}</div>
        <div className={styles.card_info_container_price}>{product.price}</div>

        <div className={styles.card_info_container_rating}>
          <span>{product.rating}</span>
          <Rating value={product.rating} readOnly cancel={false} />
        </div>

        <div className={styles.card_info_container_description}>{product.description.length > 40 ? product.description.slice(0, 40) + ".." : product.description}</div>

        <div className={styles.card_info_container_actions}>
          <Button label="В корзину" icon={"pi pi-shopping-cart"} size="small" />
          <Heart color="rgb(175 235 0)" />
        </div>
      </div>
    </div>
  );
}
