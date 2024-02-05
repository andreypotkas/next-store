import Logo from "@/app/ui/Logo";
import NavigationBar from "@/app/ui/main/layout/NavigationBar";
import SearchInput from "@/app/ui/main/layout/SearchInput";
import appTopBarStyles from "@/styles/main/layout/appTopBar.module.scss";

export default function AppTopBar() {
  return (
    <header className={appTopBarStyles.apptopbar}>
      <div className={appTopBarStyles.apptopbar_content}>
        <div className={appTopBarStyles.apptopbar_content_left}>
          <Logo size={48} />
          <SearchInput />
        </div>
        <div className={appTopBarStyles.apptopbar_content_right}>
          <div className={appTopBarStyles.apptopbar_content_right_nav}>
            <NavigationBar />
          </div>
          <div className={appTopBarStyles.apptopbar_content_right_nav_mobile}>
            <NavigationBar />
          </div>
        </div>
      </div>
    </header>
  );
}
