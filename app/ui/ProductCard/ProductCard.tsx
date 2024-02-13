import { Product, ProductCardFormat } from "@/types/product";
import { ReactNode } from "react";
import ProductCardLg from "./Lg/ProductCardLg";
import ProductCardRow from "./Row/ProductCardRow";
import ProductCardSm from "./Sm/ProductCardSm";

type Props = {
  product: Product;
  format: ProductCardFormat;
};

export default function ProductCard({ product, format }: Props) {
  const card: Record<ProductCardFormat, ReactNode> = {
    ["sm"]: <ProductCardSm product={product} />,
    ["lg"]: <ProductCardLg product={product} />,
    ["row"]: <ProductCardRow product={product} />,
  };
  return card[format];
}
