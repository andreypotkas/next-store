"use client";

import styles from "@/styles/layout/navigationBar.module.scss";
import { NavigationBarItemType } from "@/types/items";
import clsx from "clsx";
import { Bell, Home, Newspaper, Users } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const navigationBarItems: NavigationBarItemType[] = [
  {
    label: "Главная",
    icon: <Home width={24} height={24} />,
    link: "/home",
  },
  {
    label: "Избранное",
    icon: <Home width={24} height={24} />,
    link: "/home",
  },
  {
    label: "Уведомления",
    icon: <Users width={24} height={24} />,
    link: "/?page=social",
  },
  {
    label: "Профиль",
    icon: <Newspaper width={24} height={24} />,
    link: "/?page=link",
  },
  {
    label: "Корзина",
    icon: <Bell width={24} height={24} />,
    link: "/?page=link",
  },
];

type Props = { item: NavigationBarItemType; isActive: boolean; index: number; handler: Dispatch<SetStateAction<number>> };

function NavigationBarItem({ item, isActive, index, handler }: Props) {
  const handleClick = () => {
    handler(index);
  };

  return (
    <Link className={clsx(styles.navigation_bar_item, isActive && styles.navigation_bar_item)} href={item.link} onClick={handleClick}>
      <span> {item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}

export default function NavigationBar() {
  const [active, setActive] = useState(0);

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
