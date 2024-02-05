"use client";

import styles from "@/styles/main/ui/search.module.scss";
import clsx from "clsx";
import { InputText } from "primereact/inputtext";

export default function SearchInput() {
  return (
    <span className={clsx(styles.container)}>
      <InputText id="search-input" placeholder="Search" />
    </span>
  );
}
