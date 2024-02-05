import homeStyles from "@/styles/main/home/home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function LeftSideBar() {
  return (
    <div className={homeStyles.left_side}>
      <div className={homeStyles.left_side_image_container}>
        <div className={homeStyles.left_side_image_container_bg}></div>
        <Image src={"/default-user-logo.svg"} alt="user image" width={100} height={100} className={homeStyles.left_side_image_container_image} />
      </div>
      <div className={homeStyles.left_side_info}>
        <Link href={"/profile"} className={homeStyles.left_side_info_name}>
          User Name
        </Link>
        <div className={homeStyles.left_side_info_status}>Example of user status description</div>
      </div>
    </div>
  );
}
