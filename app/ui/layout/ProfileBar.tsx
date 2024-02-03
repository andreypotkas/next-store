"use client";

import styles from "@/styles/layout.module.scss";
import Image from "next/image";
import { OverlayPanel } from "primereact/overlaypanel";
import { MouseEvent, useRef } from "react";

export default function ProfileBar() {
  const overlayPanel = useRef<OverlayPanel | null>(null);
  const handleClick = (e: MouseEvent) => {
    if (!overlayPanel.current) return;
    overlayPanel.current.toggle(e);
  };

  return (
    <div className={styles.layout_navigation_bar_item} onClick={handleClick}>
      <div className={styles.layout_profile_item_image_container}>
        <Image className="rounded" width={24} height={24} src={"/default-user-logo.svg"} alt="user-logotip" />
      </div>
      <span className={styles.layout_profile_item_text_container}>
        <span>Profile</span>
        <i className="pi pi-caret-down"></i>
      </span>
      <OverlayPanel ref={overlayPanel}>Panel</OverlayPanel>
    </div>
  );
}
