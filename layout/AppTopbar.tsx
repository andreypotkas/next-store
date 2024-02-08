import Logo from "@/app/ui/Logo";
import { LayoutContext } from "@/context/layoutcontext";
import { AppTopbarRef } from "@/types/layout";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import NavigationBar from "./NavigationBar";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { onMenuToggle } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        <Logo size={48} />
        <span>NextStore</span>
      </Link>
      <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
        <i className="pi pi-bars" />
      </button>
      <InputText />

      <NavigationBar />
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;
