import Logo from "@/app/ui/Logo";
import rightSideBarStyles from "@/styles/main/layout/rightSideBar.module.scss";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function RightSideBar() {
  return (
    <div className={rightSideBarStyles.right_side_bar}>
      <div className={rightSideBarStyles.right_side_bar_content}>
        <div className={rightSideBarStyles.right_side_bar_content_item}>
          <Image src={"/default-user-logo.svg"} width={48} height={48} alt="test alt" />
          <div className={rightSideBarStyles.right_side_bar_content_item_content}>
            <span className={rightSideBarStyles.right_side_bar_content_item_content_title}>Title example</span>
            <span>Description short text about group</span>
            <Button size="small" label={"Subscribe"} rounded outlined></Button>
          </div>
        </div>
        <div className={rightSideBarStyles.right_side_bar_content_item}>
          <Image src={"/default-user-logo.svg"} width={48} height={48} alt="test alt" />
          <div className={rightSideBarStyles.right_side_bar_content_item_content}>
            <span className={rightSideBarStyles.right_side_bar_content_item_content_title}>Title example</span>
            <span>Description short text about group</span>
            <Button size="small" label={"Subscribe"} rounded outlined></Button>
          </div>
        </div>
        <div className={rightSideBarStyles.right_side_bar_content_item}>
          <Image src={"/default-user-logo.svg"} width={48} height={48} alt="test alt" />
          <div className={rightSideBarStyles.right_side_bar_content_item_content}>
            <span className={rightSideBarStyles.right_side_bar_content_item_content_title}>Title example</span>
            <span>Description short text about group</span>
            <Button size="small" label={"Subscribe"} rounded outlined></Button>
          </div>
        </div>
      </div>
      <Link href="/" className={rightSideBarStyles.right_side_bar_link}>
        <span>See other recommendations </span>
        <ArrowRightCircle />
      </Link>
      <div className={rightSideBarStyles.right_side_bar_footer}>
        <Logo size={24} />
        <span>RunConnect © 2024</span>
      </div>
    </div>
  );
}
