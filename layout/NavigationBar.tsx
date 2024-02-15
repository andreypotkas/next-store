"use client";

import { getCart, getFavorites } from "@/app/services/localStorage.service";
import { LayoutContext } from "@/context/layoutcontext";
import { useCartState } from "@/state/cart.state";
import { useFavoriteState } from "@/state/favorites.state";
import styles from "@/styles/layout/navigationBar.module.scss";
import { NavigationBarItemType } from "@/types/items";
import clsx from "clsx";
import { Home, LucideHeart, Search, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

type Props = { item: NavigationBarItemType; isActive: boolean; index: number; handler: Dispatch<SetStateAction<number>> };

function NavigationBarItem({ item, isActive, index, handler }: Props) {
  const handleClick = () => {
    if (item.link) handler(index);
    item.action();
  };

  return (
    <div className={clsx(styles.navigation_bar_item, isActive && styles.navigation_bar_item_active)} onClick={handleClick}>
      {!!item.badge && <span className={styles.navigation_bar_item_badge}>{item.badge}</span>}
      <span> {item.icon}</span>
      <span>{item.label}</span>
    </div>
  );
}

export default function NavigationBar() {
  const [active, setActive] = useState(1);
  const { toggleCart, toggleSearch } = useContext(LayoutContext);
  const router = useRouter();

  const { setFavoriteProducts, products: favoritesProducts } = useFavoriteState();
  const { setCartProducts, products: cartProducts } = useCartState();

  useEffect(() => {
    setFavoriteProducts(getFavorites());
    setCartProducts(getCart());
  }, [setFavoriteProducts, setCartProducts]);

  const navigationBarItems: NavigationBarItemType[] = [
    {
      label: "Поиск",
      icon: <Search width={24} height={24} />,
      link: false,
      action: () => toggleSearch(),
    },
    {
      label: "Главная",
      icon: <Home width={24} height={24} />,
      link: true,
      action: () => router.push("/"),
    },
    {
      label: "Избранное",
      icon: <LucideHeart width={24} height={24} />,
      link: true,
      badge: favoritesProducts.length,
      action: () => router.push("/favorites"),
    },
    {
      label: "Корзина",
      icon: <ShoppingCart width={24} height={24} />,
      link: false,
      badge: cartProducts.length,
      action: () => toggleCart(),
    },
  ];

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
