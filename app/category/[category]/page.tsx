import CardContainer from "@/app/ui/CardContainer/CardContainer";
import RelatedProducts from "@/app/ui/RelatedProducts/RelatedProducts";
import styles from "@/styles/home.module.scss";

type Params = {
  category?: string;
};

async function getProducts(params: Params) {
  return (await fetch(`https://dummyjson.com/products/category/${params.category}`)).json();
}

export default async function Category({ params }: { params: Params }) {
  const data = await getProducts(params);

  return (
    <div className={styles.page_container}>
      <div className={styles.title}>Category | {params.category}</div>
      <CardContainer products={data.products} />
      <RelatedProducts />
    </div>
  );
}
