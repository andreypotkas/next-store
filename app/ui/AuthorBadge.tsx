import styles from "@/styles/ui/AuthorBadge.module.scss";
import Image from "next/image";

export default function AuthorBadge() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} width={50} height={50} src={"/default-user-logo.svg"} alt="author image" />
      <div className={styles.info}>
        <div className={styles.info_name}>Author name</div>
        <div className={styles.info_headline}>Short description headline</div>
        <div className={styles.info_date}>{new Date().toLocaleDateString()}</div>
      </div>
    </div>
  );
}
