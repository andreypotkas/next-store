"use client";

import styles from "@/styles/layout/layout.module.scss";
import { ChildContainerProps } from "@/types/layout";
import clsx from "clsx";
import React from "react";
import CartBar from "./CartBar";
import LeftSidebar from "./LeftSideBar";
import SearchBar from "./SearchBar";
import Topbar from "./Topbar";

const Layout = ({ children }: ChildContainerProps) => {
  return (
    <React.Fragment>
      <Topbar />

      <div className={clsx(styles.container)}>
        <LeftSidebar />
        <div className={styles.content}>{children}</div>
        <CartBar />
        <SearchBar />
      </div>
    </React.Fragment>
  );
};

export default Layout;
