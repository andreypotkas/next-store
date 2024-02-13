import CardContainer from "@/app/ui/CardContainer/CardContainer";
import styles from "@/styles/home.module.scss";

type Params = {
  category?: string;
};

async function getProducts(params: Params) {
  return (await fetch(`https://dummyjson.com/products/category/${params.category}`)).json();
}

export default async function Home({ params }: { params: Params }) {
  const data = await getProducts(params);
  console.log(params.category);

  return (
    <div className={styles.page_container}>
      <CardContainer products={data.products} />
    </div>
  );
}
