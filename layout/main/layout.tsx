import { LayoutProvider } from "@/context/layoutcontext";
import AppTopBar from "@/layout/main/AppTopBar";
import styles from "@/styles/main/layout/layout.module.scss";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <main className={styles.layout}>
        <AppTopBar />
        <div className={styles.layout_content}>{children}</div>
      </main>
    </LayoutProvider>
  );
}
