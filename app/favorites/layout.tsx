import styles from "@/styles/home.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite products | NextStore",
  openGraph: {
    title: "Favorite products | NextStore",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <div className={styles.page_container}>
      <div className={styles.title}>
        <span>Favorites</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
