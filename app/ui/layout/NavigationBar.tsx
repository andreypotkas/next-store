"use client";
import styles from "@/styles/layout.module.scss";
import { NavigationBarItemType } from "@/types/items";
import { Bell, Home, MessageSquareMore, Users } from "lucide-react";
import { useState } from "react";
import NavigationBarItem from "./NavigationBarItem";

const navigationBarItems: NavigationBarItemType[] = [
  {
    label: "Home",
    icon: <Home width={24} height={24} />,
    link: "/",
  },
  {
    label: "Social",
    icon: <Users width={24} height={24} />,
    link: "/?page=social",
  },
  {
    label: "Messages",
    icon: <MessageSquareMore width={24} height={24} />,
    link: "/?page=messages",
  },
  {
    label: "Notifications",
    icon: <Bell width={24} height={24} />,
    link: "/?page=link",
  },
];

export default function NavigationBar() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.layout_navigation_bar}>
      {navigationBarItems.map((item, index) => {
        return <NavigationBarItem key={Math.random()} isActive={index === active} item={item} handler={setActive} index={index} />;
      })}
    </div>
  );
}
