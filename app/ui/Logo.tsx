import Image from "next/image";

type Props = {
  size: number;
};

export default function Logo({ size }: Props) {
  return <Image width={size} height={size} priority src={"/logo.svg"} alt={"main logo"} />;
}
