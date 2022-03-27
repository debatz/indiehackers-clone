import FooterColLink from "@/components/atoms/Index/Footer/FooterColLink";
import FooterColTitle from "@/components/atoms/Index/Footer/FooterColTitle";

export default function FooterColumn({ props, title, router }) {
  return (
    <div>
      <FooterColTitle>{title}</FooterColTitle>
      <ul className="flex flex-col space-y-1">
        {props.map((item, index) => {
          return (
            <li key={index}>
              <FooterColLink
                icon={item.icon}
                isActive={router.pathname == item.href ? true : false}
              >
                {item.title}
              </FooterColLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
