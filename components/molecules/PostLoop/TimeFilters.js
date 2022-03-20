import { useRouter } from "next/router";

import Link from "next/link";
import TimeFilterTitle from "@/components/atoms/PostLoop/TimeFilterTitle";

export default function TimeFilters() {
  const router = useRouter();
  const props = [
    { title: "TODAY", href: "/" },
    { title: "WEEKLY", href: "/weekly" },
    { title: "MONTHLY", href: "/monthly" },
    { title: "ALL-TIME", href: "/all-time" },
  ];
  return (
    <nav>
      <ul className="flex space-x-3">
        {props.map((i, index) => {
          return (
            <li key={index}>
              <Link href={i.href} passHref value="test">
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
