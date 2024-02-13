"use client";

import { LayoutContext } from "@/context/layoutcontext";
import { Product, ProductCardFormat } from "@/types/product";
import clsx from "clsx";
import { Grip, LayoutGrid, LayoutList, SlidersHorizontal } from "lucide-react";
import { OverlayPanel } from "primereact/overlaypanel";
import { useContext, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./index.module.scss";

type Props = {
  products: Product[];
};

export default function CardContainer({ products }: Props) {
  const { layoutConfig } = useContext(LayoutContext);
  const [format, setFormat] = useState<ProductCardFormat>("lg");
  const op = useRef(null);

  const containerClassNames: Record<ProductCardFormat, string> = {
    ["sm"]: styles.card_container_sm,
    ["lg"]: styles.card_container_lg,
    ["row"]: styles.card_container_row,
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <div className={styles.nav_filters}>
            <SlidersHorizontal />
            <span>Настройки поиска</span>
          </div>
          <div className={styles.nav_format}>
            <span className={styles.nav_format_item} onClick={() => setFormat("sm")}>
              <Grip />
            </span>
            <span className={styles.nav_format_item} onClick={() => setFormat("lg")}>
              <LayoutGrid />
            </span>
            <span className={styles.nav_format_item} onClick={() => setFormat("row")}>
              <LayoutList />
            </span>
          </div>
        </div>
        <div className={clsx(containerClassNames[format], layoutConfig.leftSideBarVisible && styles.left_side_bar_visible)}>
          {products.map((item) => {
            return <ProductCard format={format} key={Math.random()} product={item} />;
          })}
        </div>
      </div>
      <OverlayPanel ref={op}></OverlayPanel>
    </>
  );
}
