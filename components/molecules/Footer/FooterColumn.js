import FooterColLink from "@/components/atoms/Footer/FooterColLink";
import FooterColTitle from "@/components/atoms/Footer/FooterColTitle";

export default function FooterColumn({ props, title, router }) {
  return (
    <div className="flex flex-col">
      <FooterColTitle>{title}</FooterColTitle>
      <ul>
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
