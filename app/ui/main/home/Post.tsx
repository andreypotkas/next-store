"use client";

import postStyles from "@/styles/ui/main/home/post.module.scss";
import Image from "next/image";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import AuthorBadge from "../../AuthorBadge";

export default function Post() {
  const header = <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />;
  const footer = <div></div>;

  return (
    <div className={postStyles.container}>
      <div className={postStyles.header}>
        <AuthorBadge />
        <Button label="Follow" icon={"pi pi-plus"} outlined rounded />
      </div>
      <div className={postStyles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam
        perferendis esse, cupiditate neque quas!
      </div>
      <div className={postStyles.attachments}>
        <Image fill sizes="height:20rem" src={"https://primefaces.org/cdn/primereact/images/usercard.png"} alt="test alt" />
      </div>
      <Divider />
      <div className={postStyles.footer}>
        <Button severity="secondary" rounded outlined label="Like" icon="pi pi-check" />
        <Button severity="secondary" rounded outlined label="Repost" icon="pi pi-check" />
        <Button severity="secondary" rounded outlined label="Comment" icon="pi pi-check" />
        <Button severity="secondary" rounded outlined label="Send" icon="pi pi-check" />
      </div>
    </div>
  );
}
