"use client";

import styles from "@/styles/main/layout/search.module.scss";
import clsx from "clsx";
import { InputText } from "primereact/inputtext";

export default function SearchInput() {
  return (
    <span className={clsx(styles.container)}>
      <InputText id="search-input" placeholder="Поиск.." />
    </span>
  );
}
