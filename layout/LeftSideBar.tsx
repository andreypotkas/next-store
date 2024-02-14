"use client";
import { LayoutContext } from "@/context/layoutcontext";
import styles from "@/styles/layout/leftSideBar.module.scss";

import { SideBarMenuItem } from "@/types/layout";
import clsx from "clsx";
import { BedDouble, Bike, Component, Dice2, FlaskRound, Footprints, Gem, Glasses, Heart, Home, Laptop, PersonStanding, Shirt, ShoppingBag, Siren, Smartphone, Watch, Workflow } from "lucide-react";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { useContext, useState } from "react";

const categories = [
  { label: "Smartphones", icon: <Smartphone className="p-menuitem-icon" />, category: "smartphones" },
  { label: "Laptops", icon: <Laptop className="p-menuitem-icon" />, category: "laptops" },
  { label: "Fragrances", icon: <FlaskRound className="p-menuitem-icon" />, category: "fragrances" },
  { label: "Skincare", icon: <Heart className="p-menuitem-icon" />, category: "skincare" },
  { label: "Groceries", icon: <Component className="p-menuitem-icon" />, category: "groceries" },
  { label: "Home decoration", icon: <Home className="p-menuitem-icon" />, category: "home-decoration" },
  { label: "Furniture", icon: <BedDouble className="p-menuitem-icon" />, category: "furniture" },
  { label: "Tops", icon: <Dice2 className="p-menuitem-icon" />, category: "tops" },
  { label: "Womens dresses", icon: <Shirt className="p-menuitem-icon" />, category: "womens-dresses" },
  { label: "Womens shoes", icon: <Footprints className="p-menuitem-icon" />, category: "womens-shoes" },
  { label: "Mens shirts", icon: <PersonStanding className="p-menuitem-icon" />, category: "mens-shirts" },
  { label: "Mens shoes", icon: <Footprints className="p-menuitem-icon" />, category: "mens-shoes" },
  { label: "Mens watches", icon: <Watch className="p-menuitem-icon" />, category: "mens-watches" },
  { label: "Womens watches", icon: <Watch className="p-menuitem-icon" />, category: "womens-watches" },
  { label: "Womens bags", icon: <ShoppingBag className="p-menuitem-icon" />, category: "womens-bags" },
  { label: "Womens jewellery", icon: <Gem className="p-menuitem-icon" />, category: "womens-jewellery" },
  { label: "Sunglasses", icon: <Glasses className="p-menuitem-icon" />, category: "sunglasses" },
  { label: "Automotive", icon: <Workflow className="p-menuitem-icon" />, category: "automotive" },
  { label: "Motorcycle", icon: <Bike className="p-menuitem-icon" />, category: "motorcycle" },
  { label: "Lighting", icon: <Siren className="p-menuitem-icon" />, category: "lighting" },
];

const ItemTemplate = ({ item, index, activeIndex, setActive }: { item: SideBarMenuItem; index: number; activeIndex: number; setActive: (num: number) => void }) => {
  const handleClick = () => {
    setActive(index);
  };

  return (
    <div onClick={handleClick} className={clsx(styles.item_wrapper, index === activeIndex && styles.active)}>
      <Link className={styles.left_side_bar_content_item} href={`/category/${item.category}`}>
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    </div>
  );
};

const LeftSidebar = () => {
  const { layoutConfig, toggleLeftSideBar } = useContext(LayoutContext);
  const [active, setActive] = useState(0);

  return (
    <>
      {layoutConfig.isDesktop ? (
        <div className={clsx(styles.left_side_bar, !layoutConfig.leftSideBarVisible && styles.hidden)}>
          <div className={styles.left_side_bar_content}>
            {categories.map((item, index) => {
              return <ItemTemplate item={item} index={index} activeIndex={active} setActive={setActive} key={Math.random()} />;
            })}
          </div>
        </div>
      ) : (
        <Sidebar header={<span className={"side-bar-header"}>Categories</span>} visible={layoutConfig.leftSideBarVisible} onHide={toggleLeftSideBar} style={{ width: "320px" }}>
          <div className={styles.left_side_bar_content}>
            {categories.map((item, index) => {
              return <ItemTemplate item={item} index={index} activeIndex={active} setActive={setActive} key={Math.random()} />;
            })}
          </div>
        </Sidebar>
      )}
    </>
  );
};

export default LeftSidebar;
