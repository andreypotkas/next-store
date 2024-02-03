import Logo from "@/app/ui/layout/Logo";
import NavigationBar from "@/app/ui/layout/NavigationBar";
import ProfileBar from "@/app/ui/layout/ProfileBar";
import SearchInput from "@/app/ui/layout/SearchInput";
import styles from "@/styles/layout.module.scss";

export default function AppTopBar() {
  return (
    <div className={styles.layout_apptopbar}>
      <div className={styles.layout_apptopbar_content}>
        <div className={styles.layout_apptopbar_content_left}>
          <Logo />
          <SearchInput />
        </div>
        <div className={styles.layout_apptopbar_content_right}>
          <NavigationBar />
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
