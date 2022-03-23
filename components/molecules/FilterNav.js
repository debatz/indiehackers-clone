import Link from "next/link";
import HeaderTitle from '@/atoms/HeaderTitle';
export default function FilterNav({ props, router }) {
  return (
    <nav>
      <ul className="flex space-x-3">
        {props.map((i, index) => {
          return (
            <li key={index}>
              <Link href={i.href} passHref>
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
    </nav>
  );
}
