import appTopBarStyles from "@/styles/main/layout/appTopBar.module.scss";
import { NavigationBarItemType } from "@/types/items";
import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type Props = { item: NavigationBarItemType; isActive: boolean; index: number; handler: Dispatch<SetStateAction<number>> };

export default function NavigationBarItem({ item, isActive, index, handler }: Props) {
  const handleClick = () => {
    handler(index);
  };

  return (
    <Link className={clsx(appTopBarStyles.navigation_bar_item, isActive ? appTopBarStyles.navigation_bar_active_item : "")} href={item.link} onClick={handleClick}>
      <span> {item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}
