/* eslint-disable @next/next/no-img-element */

import Logo from "@/app/ui/Logo";
import { useContext } from "react";
import { LayoutContext } from "../context/layoutcontext";

const AppFooter = () => {
  const { layoutConfig } = useContext(LayoutContext);

  return (
    <div className="layout-footer">
      <Logo size={24} />
      <span className="">NextStore</span>
    </div>
  );
};

export default AppFooter;
