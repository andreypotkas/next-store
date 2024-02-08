import { MenuProvider } from "@/context/menucontext";
import { AppMenuItem } from "@/types/layout";
import { BedDouble, Cable, Dumbbell, Footprints, HomeIcon, MessageCircleHeart, PlaneTakeoff, Shirt, ShoppingBag } from "lucide-react";
import SideBarItem from "./AppLeftSideBarItem";

const model: AppMenuItem[] = [
  {
    label: "Категории",
    items: [
      {
        label: "Одежда",
        icon: <Shirt className="p-menuitem-icon" />,
        to: "/user/clothing",
        items: [
          { label: "Мужское", icon: <Footprints className="p-menuitem-icon" />, to: "/user/shoes" },
          { label: "Женское", icon: <ShoppingBag className="p-menuitem-icon" />, to: "/user/accessories" },
        ],
      },
      { label: "Обувь", icon: <Footprints className="p-menuitem-icon" />, to: "/user/shoes" },
      { label: "Аксессуары", icon: <ShoppingBag className="p-menuitem-icon" />, to: "/user/accessories" },
      { label: "Электроника", icon: <Cable className="p-menuitem-icon" />, to: "/user/electronics" },
      { label: "Спорт и фитнес", icon: <Dumbbell className="p-menuitem-icon" />, to: "/user/sports" },
      { label: "Красота и уход", icon: <MessageCircleHeart className="p-menuitem-icon" />, to: "/user/beauty" },
      { label: "Дом и сад", icon: <HomeIcon className="p-menuitem-icon" />, to: "/user/home-garden" },
      { label: "Мебель", icon: <BedDouble className="p-menuitem-icon" />, to: "/user/furniture" },
      { label: "Туризм и путешествия", icon: <PlaneTakeoff className="p-menuitem-icon" />, to: "/user/travel" },
    ],
  },
];

const AppLeftSidebar = () => {
  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? <SideBarItem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppLeftSidebar;
