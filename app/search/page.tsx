import CardContainer from "@/app/ui/CardContainer/CardContainer";
import styles from "@/styles/home.module.scss";
import RelatedProducts from "../ui/RelatedProducts/RelatedProducts";

type Params = {
  query?: string;
};

async function getProducts(params: Params) {
  return (await fetch(`https://dummyjson.com/products/search?q=${params.query}`)).json();
}

export default async function Search({ searchParams }: { searchParams: Params }) {
  const data = await getProducts(searchParams);

  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.title}>Search query | {searchParams.query}</div>
        <CardContainer isMain={false} products={data.products} />
        <RelatedProducts />
      </div>
    </>
  );
}
