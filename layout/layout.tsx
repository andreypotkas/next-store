import { LayoutProvider } from "@/context/layoutcontext";
import AppTopBar from "@/layout/AppTopBar";
import styles from "@/styles/layout/layout.module.scss";
import React from "react";
import FooterBar from "./FooterBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <div className={styles.layout}>
        <AppTopBar />
        <div className={styles.layout_content}>{children}</div>
        <FooterBar />
      </div>
    </LayoutProvider>
  );
}
