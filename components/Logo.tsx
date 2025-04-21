"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Col & Co"
        width={120}
        height={20}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}
