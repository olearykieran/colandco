"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={30}
        className="object-contain"
      />
    </Link>
  );
}
