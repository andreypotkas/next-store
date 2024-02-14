import Gallery from "@/app/ui/Gallery/Gallery";
import styles from "@/styles/product.module.scss";
import { Heart } from "lucide-react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";

type Params = {
  id: string;
};

async function getProduct(params: Params) {
  return (await fetch(`https://dummyjson.com/products/${params.id}`)).json();
}

export default async function Product({ params }: { params: Params }) {
  const data = await getProduct(params);
  const { title, description, price, discountPercentage, rating, stock, brand, category } = data;

  return (
    <div className={styles.container}>
      <Gallery data={data} />
      <div className={styles.info}>
        <div className={styles.info_title}>{title}</div>
        <div>
          {brand} | {category}
        </div>
        <span className={styles.info_price}>${price} USD</span>
        <div className={styles.info_rating}>
          <span>{rating}</span>
          <Rating value={rating} readOnly cancel={false} />
        </div>

        <Divider />
        <div>{description}</div>
        <div className={styles.info_actions}>
          <Button label="Add to cart" icon={"pi pi-plus"} rounded />
          <Heart color="rgb(175 235 0)" />
        </div>
      </div>
    </div>
  );
}
