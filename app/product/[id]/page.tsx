import Gallery from "@/app/ui/Gallery/Gallery";
import ProductActions from "@/app/ui/ProductActions/ProductActions";
import RelatedProducts from "@/app/ui/RelatedProducts/RelatedProducts";
import styles from "@/styles/product.module.scss";
import { Product } from "@/types/product";
import { Metadata } from "next";
import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";

type Params = {
  id: string;
};

async function getProduct(params: Params): Promise<Product> {
  return (await fetch(`https://dummyjson.com/products/${params.id}`)).json();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = await getProduct(params);

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: product.title + " | NextStore",
    description: product.description,
    openGraph: {
      images: product.images,
      title: product.title,
      description: product.description,
    },
  };
}

export default async function Product({ params }: { params: Params }) {
  const product = await getProduct(params);
  const { title, description, price, rating, brand, category } = product;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Gallery data={product} />
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
          <ProductActions cartGrow product={product} />
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}
