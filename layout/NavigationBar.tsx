"use client";

import { NavigationBarItemType } from "@/types/items";
import { Bell, Home, Newspaper, Users } from "lucide-react";
import { useState } from "react";
import NavigationBarItem from "./NavigationBarItem";

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

export default function NavigationBar() {
  const [active, setActive] = useState(0);

  return (
    <div className={"navigation_bar"}>
      {navigationBarItems.map((item, index) => {
        return <NavigationBarItem key={Math.random()} isActive={index === active} item={item} handler={setActive} index={index} />;
      })}
    </div>
  );
}
