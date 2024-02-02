import Logo from "@/app/ui/layout/Logo";
import SearchInput from "@/app/ui/layout/SearchInput";
import styles from "@/styles/layout.module.scss";

export default function AppTopBar() {
  return (
    <div className={styles.layout_apptopbar}>
      <div className={styles.layout_apptopbar_content}>
        <Logo />
        <SearchInput />
      </div>
    </div>
  );
}
