import { Product } from "@/types/product";
import clsx from "clsx";
import CartBtn from "./CartBtn";
import FavoriteBtn from "./FavoriteBtn";
import styles from "./index.module.scss";

type Props = {
  product: Product;
  cartGrow?: boolean;
};

export default function ProductActions({ product, cartGrow = false }: Props) {
  return (
    <div className={clsx(styles.container, styles.with_gap)}>
      <CartBtn className={clsx(cartGrow && styles.cart_btn)} product={product} />
      <FavoriteBtn className={styles.favorite_btn} product={product} />
    </div>
  );
}
