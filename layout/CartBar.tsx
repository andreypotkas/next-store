"use client";

import ProductCardCart from "@/app/ui/ProductCard/Cart/ProductCardCart";
import { LayoutContext } from "@/context/layoutcontext";
import { useCartState } from "@/state/cart.state";
import styles from "@/styles/layout/cart.module.scss";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useContext } from "react";

export default function CartBar() {
  const { layoutConfig, toggleCart } = useContext(LayoutContext);
  const { products } = useCartState();

  return (
    <Sidebar visible={layoutConfig.cartVisible} header={<span className={"side-bar-header"}>Cart</span>} position="right" onHide={toggleCart} style={{ width: "320px" }}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {products.length ? (
            <>
              {products.map((item) => {
                return <ProductCardCart key={Math.random()} product={item} />;
              })}
            </>
          ) : (
            <div>There are no products.</div>
          )}
        </div>
        <div className={styles.btn}>
          <span>Products count: {products.length}</span>
          <span>Total price: ${products.reduce((acc, item) => acc + +item.price, 0)} USD</span>
          <Button label="Checkout" />
        </div>
      </div>
    </Sidebar>
  );
}
