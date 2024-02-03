import Logo from "@/app/ui/layout/Logo";
import NavigationBar from "@/app/ui/layout/NavigationBar";
import ProfileBar from "@/app/ui/layout/ProfileBar";
import SearchInput from "@/app/ui/layout/SearchInput";
import appTopBarStyles from "@/styles/layout/appTopBar.module.scss";

export default function AppTopBar() {
  return (
    <div className={appTopBarStyles.apptopbar}>
      <div className={appTopBarStyles.apptopbar_content}>
        <div className={appTopBarStyles.apptopbar_content_left}>
          <Logo />
          <SearchInput />
        </div>
        <div className={appTopBarStyles.apptopbar_content_right}>
          <div className={appTopBarStyles.apptopbar_content_right_nav}>
            <NavigationBar />
          </div>
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
