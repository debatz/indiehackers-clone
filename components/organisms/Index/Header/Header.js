import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FilterNav from '@/components/molecules/Index/Header/FilterNav';
import HeaderButton from '@/components/atoms/Index/Header/HeaderButton';

const headerItems = [
  { name: "Popular", href: "/" },
  { name: "Newest", href: "/newest" },
  { name: "Groups", href: "/groups" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className='flex items-center justify-between sm:p-2'>
    <FilterNav props={headerItems} router={router}></FilterNav>
    <HeaderButton />
    </header>
  );
}
