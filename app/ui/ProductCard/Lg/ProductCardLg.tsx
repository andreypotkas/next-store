import { Product } from "@/types/product";
import Image from "next/image";
import { Rating } from "primereact/rating";
import ProductActions from "../../ProductActions/ProductActions";
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
        <div className={styles.card_info_container_price}>${product.price} USD</div>

        <div className={styles.card_info_container_rating}>
          <span>{product.rating}</span>
          <Rating value={product.rating} readOnly cancel={false} />
        </div>

        <div className={styles.card_info_container_description}>{product.description.length > 40 ? product.description.slice(0, 40) + ".." : product.description}</div>
        <ProductActions cartGrow={false} product={product} />
      </div>
    </div>
  );
}
