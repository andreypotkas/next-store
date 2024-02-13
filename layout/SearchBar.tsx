"use client";

import { LayoutContext } from "@/context/layoutcontext";
import styles from "@/styles/layout/searchBar.module.scss";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { FormEvent, useContext, useState } from "react";

const recommendedProducts = ["Phone", "Laptop", "Perfume", "Watch"];

export default function SearchBar() {
  const { layoutConfig, toggleSearch } = useContext(LayoutContext);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const runSearch = (query: string) => {
    router.push(`/search?query=${query}`);
    toggleSearch();
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") runSearch(searchQuery);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as unknown;
    const value = (target as { value: string }).value;

    setSearchQuery(value);
  };

  const handleClickBtnSearch = () => {
    runSearch(searchQuery);
  };

  const handleClickRecommendedItem = (query: string) => {
    runSearch(query);
  };

  return (
    <Sidebar onKeyDown={handleKeyDown} header={<span className={"side-bar-header"}>Search</span>} visible={layoutConfig.searchVisible} onHide={toggleSearch} position="top" className={styles.side_bar}>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <InputText onInput={handleInput} />
          <Button icon={"pi pi-search"} onClick={handleClickBtnSearch} />
        </div>
        <span className={styles.info}>To start searching type keyword, for example `phone`, then click icon or use `enter` keyboard or select one below.</span>
        <div className={styles.items_container}>
          <span className={styles.items_container_title}> Popular requests</span>
          {recommendedProducts.map((item) => {
            return (
              <div onClick={() => handleClickRecommendedItem(item)} className={styles.items_container_item} key={Math.random()}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </Sidebar>
  );
}
