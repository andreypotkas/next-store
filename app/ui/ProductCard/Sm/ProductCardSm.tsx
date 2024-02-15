import { Product } from "@/types/product";
import Image from "next/image";
import { Rating } from "primereact/rating";
import ProductActions from "../../ProductActions/ProductActions";
import styles from "./index.module.scss";

type Props = {
  product: Product;
};

export default function ProductCardSm({ product }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <Image src={product.images[0]} fill alt={product.title + " product"} sizes="maxWidth: 320px" />
      </div>
      <div className={styles.card_price}>${product.price} USD</div>
      <div className={styles.card_rating}>
        <span>{product.rating}</span>
        <Rating value={product.rating} readOnly cancel={false} />
      </div>

      <div className={styles.card_title}>{product.title}</div>
      <div className={styles.card_brand}>{product.brand}</div>

      <ProductActions product={product} />
    </div>
  );
}
