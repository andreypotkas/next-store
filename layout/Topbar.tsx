"use client";
import Logo from "@/app/ui/Logo";
import { LayoutContext } from "@/context/layoutcontext";
import styles from "@/styles/layout/topBar.module.scss";
import Link from "next/link";
import { useContext } from "react";
import NavigationBar from "./NavigationBar";

const Topbar = () => {
  const { toggleLeftSideBar } = useContext(LayoutContext);

  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_left}>
        <Link href="/" className={styles.topbar_left_logo}>
          <Logo size={48} />
          <span>NextStore</span>
        </Link>
        <button className={styles.topbar_left_button} onClick={toggleLeftSideBar}>
          <i className="pi pi-bars" />
        </button>
      </div>

      <NavigationBar />
    </div>
  );
};

Topbar.displayName = "Topbar";

export default Topbar;
