import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FilterNav from '@/molecules/FilterNav';

const headerItems = [
  { name: "Popular", href: "/" },
  { name: "Newest", href: "/newest" },
  { name: "Groups", href: "/groups" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="p-4">
    <FilterNav props={headerItems} router={router}></FilterNav>
    </header>
  );
}
