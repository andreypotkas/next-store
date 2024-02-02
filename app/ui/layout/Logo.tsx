import Image from "next/image";

export default function Logo() {
  return <Image width={48} height={48} priority src={"/logo.svg"} alt={"main logo"} />;
}
