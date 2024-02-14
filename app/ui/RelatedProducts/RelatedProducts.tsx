import { Product } from "@/types/product";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./index.module.scss";

async function getProducts() {
  return (await fetch(`https://dummyjson.com/products?limit=10`)).json();
}

export default async function RelatedProducts() {
  const data = await getProducts();

  return (
    <div className={styles.wrapper}>
      <h2>Related products</h2>
      <div className={styles.container}>
        <div className={styles.content}>
          {data.products.map((item: Product) => {
            return <ProductCard format="related" product={item} key={Math.random()} />;
          })}
        </div>
      </div>
    </div>
  );
}
