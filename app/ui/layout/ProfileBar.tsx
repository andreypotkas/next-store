"use client";

import profileBarStyles from "@/styles/layout/profileBar.module.scss";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { OverlayPanel } from "primereact/overlaypanel";
import { MouseEvent, useRef } from "react";
import ThemeSwitcher from "../ThemeSwitcher";

export default function ProfileBar() {
  const router = useRouter();
  const overlayPanel = useRef<OverlayPanel | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (!overlayPanel.current) return;
    overlayPanel.current.toggle(e);
  };

  const handleClickShowProfile = () => {
    router.push("/profile");
  };

  return (
    <div className={profileBarStyles.profile_item} onClick={handleClick}>
      <div className={profileBarStyles.profile_item_image_container}>
        <Image className="rounded" width={24} height={24} src={"/default-user-logo.svg"} alt="user-logotip" />
      </div>
      <span className={profileBarStyles.profile_item_text_container}>
        <span>Profile</span>
        <i className="pi pi-caret-down"></i>
      </span>
      <OverlayPanel ref={overlayPanel}>
        <div className={profileBarStyles.profile_overlay}>
          <div className={profileBarStyles.profile_overlay_content_description}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Image className="rounded" width={48} height={48} src={"/default-user-logo.svg"} alt={"user logo"} />
              <Button severity="secondary" label="Show profile" outlined rounded size="small" onClick={handleClickShowProfile} />
              <ThemeSwitcher />
            </div>
            <Divider />

            <div className={profileBarStyles.profile_overlay_description_name}>User name</div>
            <div className={profileBarStyles.profile_overlay_description_status}>User status: Short description about ur current plans.</div>
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
}
