import styles from "@/styles/home.module.scss";
import CardContainer from "./ui/CardContainer/CardContainer";
import Carousel from "./ui/Carousel/Carousel";

async function getProducts() {
  return (await fetch(`https://dummyjson.com/products?limit=100`)).json();
}

export default async function Home() {
  const data = await getProducts();

  return (
    <div className={styles.page_container}>
      <Carousel />
      <CardContainer products={data.products} />
    </div>
  );
}
