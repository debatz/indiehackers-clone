import { useRouter } from "next/router";
import { twClass } from 'utils/twClass';

import Link from "next/link";
import TimeFilterTitle from "@/components/atoms/Index/PostLoop/TimeFilterTitle";

export default function TimeFilters({className}) {
  const router = useRouter();
  const props = [
    { title: "TODAY", href: "/" },
    { title: "WEEKLY", href: "/weekly" },
    { title: "MONTHLY", href: "/monthly" },
    { title: "ALL-TIME", href: "/all-time" },
  ];

  return (
    <nav className={twClass(
      "",
      className && `${className}`
    )
    }>
      <ul className="flex space-x-3">
        {props.map((i, index) => {
          return (
            <li key={index}>
              <Link href={i.href} passHref>
                <a>
                  <TimeFilterTitle
                    isActive={router.pathname == i.href ? true : false}
                  >
                    {i.title}
                  </TimeFilterTitle>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
