"use client";

import { LayoutContext } from "@/context/layoutcontext";
import styles from "@/styles/layout/navigationBar.module.scss";
import { NavigationBarItemType } from "@/types/items";
import clsx from "clsx";
import { Home, LucideHeart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useState } from "react";

type Props = { item: NavigationBarItemType; isActive: boolean; index: number; handler: Dispatch<SetStateAction<number>> };

function NavigationBarItem({ item, isActive, index, handler }: Props) {
  const handleClick = () => {
    handler(index);
  };

  return (
    <>
      {item.link ? (
        <Link className={clsx(styles.navigation_bar_item, isActive && styles.navigation_bar_item)} href={item.link} onClick={handleClick}>
          <span> {item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ) : (
        <div className={clsx(styles.navigation_bar_item, isActive && styles.navigation_bar_item)} onClick={item.action}>
          <span> {item.icon}</span>
          <span>{item.label}</span>
        </div>
      )}
    </>
  );
}

export default function NavigationBar() {
  const navigationBarItems: NavigationBarItemType[] = [
    {
      label: "Поиск",
      icon: <Search width={24} height={24} />,
      action: () => toggleSearch(),
    },
    {
      label: "Главная",
      icon: <Home width={24} height={24} />,
      link: "/home",
    },
    {
      label: "Профиль",
      icon: <User width={24} height={24} />,
      link: "/?page=social",
    },
    {
      label: "Избранное",
      icon: <LucideHeart width={24} height={24} />,
      link: "/?page=link",
    },
    {
      label: "Корзина",
      icon: <ShoppingCart width={24} height={24} />,
      action: () => toggleCart(),
    },
  ];
  const [active, setActive] = useState(0);
  const { toggleCart, toggleSearch } = useContext(LayoutContext);

  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.navigation_bar}>
          {navigationBarItems.map((item, index) => {
            return <NavigationBarItem key={Math.random()} isActive={index === active} item={item} handler={setActive} index={index} />;
          })}
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.navigation_bar}>
          {navigationBarItems.map((item, index) => {
            return <NavigationBarItem key={Math.random()} isActive={index === active} item={item} handler={setActive} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}
