"use client";
import appTopBarStyles from "@/styles/main/layout/appTopBar.module.scss";

import { NavigationBarItemType } from "@/types/items";
import { Bell, Home, Newspaper, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavigationBarItem from "./NavigationBarItem";

const navigationBarItems: NavigationBarItemType[] = [
  {
    label: "Home",
    icon: <Home width={24} height={24} />,
    link: "/home",
  },
  {
    label: "Social",
    icon: <Users width={24} height={24} />,
    link: "/?page=social",
  },
  {
    label: "Notifications",
    icon: <Bell width={24} height={24} />,
    link: "/?page=link",
  },
  {
    label: "Blog",
    icon: <Newspaper width={24} height={24} />,
    link: "/?page=link",
  },
  {
    label: "Profile",
    icon: (
      <div className={appTopBarStyles.profile_item_image_container}>
        <Image className="rounded" width={24} height={24} src={"/default-user-logo.svg"} alt="user-logotip" />
      </div>
    ),
    link: "/?page=messages",
  },
];

export default function NavigationBar() {
  const [active, setActive] = useState(0);

  return (
    <div className={appTopBarStyles.navigation_bar}>
      {navigationBarItems.map((item, index) => {
        return <NavigationBarItem key={Math.random()} isActive={index === active} item={item} handler={setActive} index={index} />;
      })}
    </div>
  );
}
