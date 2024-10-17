import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="size-10" />
        <h4 className="text-3xl font-semibold">
          Cal<span className="text-blue-500">Melee</span>
        </h4>
      </Link>
      <button>Get started Today</button>
    </div>
  );
}
