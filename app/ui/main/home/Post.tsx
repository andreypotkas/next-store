"use client";
import postStyles from "@/styles/ui/main/home/post.module.scss";
import { MessageSquareMore, Repeat2, Send, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Divider } from "primereact/divider";
import AuthorBadge from "../../AuthorBadge";

export default function Post() {
  return (
    <div className={postStyles.container}>
      <div className={postStyles.header}>
        <AuthorBadge />
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
        <div className={postStyles.footer_item}>
          <ThumbsUp />
          <span>Нравится</span>
        </div>
        <div className={postStyles.footer_item}>
          <MessageSquareMore />
          <span>Комментарии</span>
        </div>
        <div className={postStyles.footer_item}>
          <Repeat2 /> <span>Поделиться</span>
        </div>
        <div className={postStyles.footer_item}>
          <Send /> <span>Отправить</span>
        </div>
      </div>
    </div>
  );
}
