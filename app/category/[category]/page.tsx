import CardContainer from "@/app/ui/CardContainer/CardContainer";
import RelatedProducts from "@/app/ui/RelatedProducts/RelatedProducts";
import styles from "@/styles/home.module.scss";
import { Metadata } from "next";

type Params = {
  category: string;
};

async function getProducts(params: Params) {
  return (await fetch(`https://dummyjson.com/products/category/${params.category}`)).json();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  // read route params
  const category = params.category;
  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} products | NextStore`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export default async function Category({ params }: { params: Params }) {
  const data = await getProducts(params);
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className={styles.page_container}>
      <div className={styles.title}>
        Category | <span style={{ color: "var(--primary-color)" }}>{category}</span>
      </div>
      <CardContainer isMain={false} products={data.products} />
      <RelatedProducts />
    </div>
  );
}
