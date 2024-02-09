"use client";
import { LayoutContext } from "@/context/layoutcontext";
import styles from "@/styles/layout/leftSideBar.module.scss";

import { SideBarMenuItem } from "@/types/layout";
import clsx from "clsx";
import { BedDouble, Cable, Dumbbell, Footprints, HomeIcon, Layers3, MessageCircleHeart, PlaneTakeoff, Shirt, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { useContext, useState } from "react";

const model: SideBarMenuItem[] = [
  { label: "Все категории", icon: <Layers3 className="p-menuitem-icon" />, to: "/" },
  {
    label: "Одежда",
    icon: <Shirt className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Обувь",
    icon: <Footprints className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Аксессуары",
    icon: <ShoppingBag className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Электроника",
    icon: <Cable className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Обувь",
    icon: <Footprints className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Спорт и фитнес",
    icon: <Dumbbell className="p-menuitem-icon" />,
    to: "/",
  },

  {
    label: "Красота и уход",
    icon: <MessageCircleHeart className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Дом и сад",
    icon: <HomeIcon className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Мебель",
    icon: <BedDouble className="p-menuitem-icon" />,
    to: "/",
  },
  {
    label: "Туризм и путешествия",
    icon: <PlaneTakeoff className="p-menuitem-icon" />,
    to: "/",
  },
];

const ItemTemplate = ({ item, index, activeIndex, setActive }: { item: SideBarMenuItem; index: number; activeIndex: number; setActive: (num: number) => void }) => {
  const handleClick = () => {
    setActive(index);
  };

  return (
    <div onClick={handleClick} className={clsx(styles.item_wrapper, index === activeIndex && styles.active)}>
      <Link className={styles.left_side_bar_content_item} href={item.to}>
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    </div>
  );
};

const LeftSidebar = () => {
  const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
  const [active, setActive] = useState(0);
  const handleClickBtn = () => {
    setLayoutConfig({ ...layoutConfig, sideBarVisible: !layoutConfig.sideBarVisible });
  };
  return (
    <>
      {layoutConfig.isDesktop ? (
        <div className={clsx(styles.left_side_bar, !layoutConfig.sideBarVisible && styles.hidden)}>
          <div className={styles.left_side_bar_content}>
            {model.map((item, index) => {
              return <ItemTemplate item={item} index={index} activeIndex={active} setActive={setActive} key={Math.random()} />;
            })}
          </div>
        </div>
      ) : (
        <Sidebar visible={layoutConfig.sideBarVisible} onHide={handleClickBtn} style={{ width: "320px" }}>
          <div className={styles.left_side_bar_content}>
            {model.map((item, index) => {
              return <ItemTemplate item={item} index={index} activeIndex={active} setActive={setActive} key={Math.random()} />;
            })}
          </div>
        </Sidebar>
      )}
    </>
  );
};

export default LeftSidebar;
