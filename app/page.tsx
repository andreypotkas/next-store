import styles from "@/styles/home.module.scss";
import CardContainer from "./ui/CardContainer/CardContainer";
import Carousel from "./ui/Carousel/Carousel";

type Params = {
  page: number;
};

const ITEMS_PER_PAGE = 20;

async function getProducts(page: number = 1) {
  const skip = (page - 1) * ITEMS_PER_PAGE;
  return (await fetch(`https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`)).json();
}

export default async function Home({ searchParams }: { searchParams: Params }) {
  const data = await getProducts(searchParams.page);

  return (
    <div className={styles.page_container}>
      <Carousel />
      <CardContainer products={data.products} />
    </div>
  );
}
