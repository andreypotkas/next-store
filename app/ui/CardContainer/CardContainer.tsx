"use client";

import { LayoutContext } from "@/context/layoutcontext";
import { SortTypes } from "@/types/common";
import { Product, ProductCardFormat } from "@/types/product";
import clsx from "clsx";
import { ArrowDownToLine, ArrowUpToLine, Grip, LayoutGrid, LayoutList, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./index.module.scss";

type Props = {
  products: Product[];
  isMain?: boolean;
};

export default function CardContainer({ products, isMain: isSortVisible = true }: Props) {
  const { layoutConfig } = useContext(LayoutContext);
  const [format, setFormat] = useState<ProductCardFormat>("lg");
  const sortParams = useSearchParams();
  const pathname = usePathname();

  const rating = sortParams.get("rating") as SortTypes;
  const price = sortParams.get("price") as SortTypes;

  const sortProducts = (products: Product[]) => {
    let data = products;

    if (rating) {
      rating === "ascending" ? (data = data.sort((a, b) => +b.rating - +a.rating)) : (data = data.sort((a, b) => +a.rating - +b.rating));
    }

    if (price) {
      price === "ascending" ? (data = data.sort((a, b) => +b.price - +a.price)) : (data = data.sort((a, b) => +a.price - +b.price));
    }

    return data;
  };

  const containerClassNames: Record<ProductCardFormat, string> = {
    ["sm"]: styles.card_container_sm,
    ["lg"]: styles.card_container_lg,
    ["row"]: styles.card_container_row,
    ["related"]: "",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        {isSortVisible && (
          <div className={styles.nav_filters}>
            <SlidersHorizontal />
            {price === "ascending" ? (
              <Link href={`${pathname}?price=descending`}>
                <ArrowDownToLine />
                <span>Price</span>
              </Link>
            ) : (
              <Link href={`${pathname}?price=ascending`}>
                <ArrowUpToLine />
                <span>Price</span>
              </Link>
            )}
            {rating === "ascending" ? (
              <Link href={`${pathname}?rating=descending`}>
                <ArrowDownToLine />
                <span>Rating</span>
              </Link>
            ) : (
              <Link href={`${pathname}?rating=ascending`}>
                <ArrowUpToLine />
                <span>Rating</span>
              </Link>
            )}
          </div>
        )}

        <div className={styles.nav_format}>
          <span className={styles.nav_format_item} onClick={() => setFormat("sm")}>
            <Grip className={clsx(format === "sm" && styles.active)} />
          </span>
          <span className={styles.nav_format_item} onClick={() => setFormat("lg")}>
            <LayoutGrid className={clsx(format === "lg" && styles.active)} />
          </span>
          <span className={styles.nav_format_item} onClick={() => setFormat("row")}>
            <LayoutList className={clsx(format === "row" && styles.active)} />
          </span>
        </div>
      </div>
      {products.length > 0 ? (
        <div className={clsx(containerClassNames[format], layoutConfig.leftSideBarVisible && styles.left_side_bar_visible)}>
          {sortProducts(products).map((item) => {
            return <ProductCard format={format} key={Math.random()} product={item} />;
          })}
        </div>
      ) : (
        <span className={styles.empty}>There are no products.</span>
      )}
      {isSortVisible && <Pagination />}
    </div>
  );
}
