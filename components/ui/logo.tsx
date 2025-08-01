import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/detoxx.ai-logo-icon-transparent copy.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={32} height={32} />
    </Link>
  );
}
