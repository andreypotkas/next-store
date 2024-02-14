import { useRouter, useSearchParams } from "next/navigation";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { useState } from "react";
import styles from "./index.module.scss";

export default function Pagination() {
  const sortParams = useSearchParams();
  const [first, setFirst] = useState<number>(() => {
    const page = sortParams.get("page");
    return page ? (+page - 1) * 20 : 0;
  });
  const router = useRouter();

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    router.push(`/?page=${event.page + 1}`);
  };

  return <Paginator className={styles.pagination} first={first} rows={20} totalRecords={100} onPageChange={onPageChange} />;
}
