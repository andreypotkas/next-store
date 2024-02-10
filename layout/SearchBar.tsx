import { LayoutContext } from "@/context/layoutcontext";
import styles from "@/styles/layout/searchBar.module.scss";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { useContext } from "react";

const recommendedProducts = ["Майка", "Шорты", "Наушники", "Кроссовки"];
const recommendedCategories = ["Одежда", "Обувь", "Дом и сад", "Аксессуары"];

export default function SearchBar() {
  const { layoutConfig, toggleSearch } = useContext(LayoutContext);

  return (
    <Sidebar header={<span className={"side-bar-header"}>Поиск</span>} visible={layoutConfig.searchVisible} onHide={toggleSearch} position="top" className={styles.side_bar}>
      <div className={styles.container}>
        <InputText />
        <div className={styles.items_container}>
          <span className={styles.items_container_title}> Рекомендуемые товары</span>
          {recommendedProducts.map((item) => {
            return (
              <div className={styles.items_container_item} key={Math.random()}>
                {item}
              </div>
            );
          })}
          <span className={styles.items_container_title}> Рекомендуемые категории</span>
          {recommendedCategories.map((item) => {
            return (
              <div className={styles.items_container_item} key={Math.random()}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </Sidebar>
  );
}
