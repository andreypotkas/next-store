import { LayoutContext } from "@/context/layoutcontext";
import { Sidebar } from "primereact/sidebar";
import { useContext } from "react";

export default function CartBar() {
  const { layoutConfig, toggleCart } = useContext(LayoutContext);

  return (
    <Sidebar visible={layoutConfig.cartVisible} header={<span className={"side-bar-header"}>Cart</span>} position="right" onHide={toggleCart} style={{ width: "320px" }}>
      <div></div>
    </Sidebar>
  );
}
