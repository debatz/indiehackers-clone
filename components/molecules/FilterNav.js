import { useRouter } from "next/router";
import Link from "next/link";
import HeaderTitle from '@/atoms/HeaderTitle';
import HeaderButton from '@/atoms/HeaderButton';
export default function FilterNav({ props, router }) {
  return (
    <nav className="flex justify-between">
      <ul className="flex space-x-3">
        {props.map((i, index) => {
          return (
            <li key={index}>
              <Link href={i.href} passHref value="test">
                <a>
                  <HeaderTitle
                    isActive={router.pathname == i.href ? true : false}
                  >
                    {i.name}
                  </HeaderTitle>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <HeaderButton />
    </nav>
  );
}
