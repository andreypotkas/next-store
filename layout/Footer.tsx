import Logo from "@/app/ui/Logo";
import ThemeSwitcher from "@/app/ui/ThemeSwitcher/ThemeSwitcher";
import styles from "@/styles/layout/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo size={24} />
        <span>NextStore</span>
      </div>
      <div>© 2024</div>

      <ThemeSwitcher />
    </div>
  );
}
