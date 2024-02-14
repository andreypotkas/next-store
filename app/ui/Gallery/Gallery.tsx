"use client";
import { Product } from "@/types/product";
import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from "next/navigation";
import styles from "./index.module.scss";

const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export default function Gallery({ data }: { data: Product }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get("image");
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;
  const images = data.images;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set("image", nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set("image", previousImageIndex.toString());

  const previousUrl = createUrl(pathname, previousSearchParams);

  return (
    <div className={styles.container}>
      <div className={styles.main_image}>{images[imageIndex] && <Image fill sizes="maxWidth:100%" alt={"main image"} src={images[imageIndex]} priority={true} />}</div>

      {images.length > 1 ? (
        <div className={styles.btns_container}>
          <Link aria-label="Previous product image" href={previousUrl} className={styles.btn} scroll={false}>
            <ArrowLeftIcon />
          </Link>
          <Link aria-label="Next product image" href={nextUrl} className={styles.btn} scroll={false}>
            <ArrowRightIcon />
          </Link>
        </div>
      ) : null}

      {images.length > 1 ? (
        <ul className={styles.image_container}>
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());

            imageSearchParams.set("image", index.toString());

            return (
              <li key={image}>
                <Link aria-label="Enlarge product image" href={createUrl(pathname, imageSearchParams)} scroll={false} className={clsx(styles.image_container_item, isActive && styles.active)}>
                  <Image sizes="maxWidth:4rem" alt={"image of product"} src={image} fill />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
