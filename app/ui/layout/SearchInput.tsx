import styles from "@/styles/ui/search.module.scss";
import { Search } from "lucide-react";
import { InputText } from "primereact/inputtext";

export default function SearchInput() {
  return (
    <span className={styles.container + " p-input-icon-left"}>
      <Search viewBox="0 2 32 32" width={28} />
      <InputText placeholder="Search" />
    </span>
  );
}
