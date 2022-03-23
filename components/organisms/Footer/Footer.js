import FooterColumn from "@/components/molecules/Footer/FooterColumn";
import FooterCTA from "@/components/molecules/Footer/FooterCTA";

export default function Footer({props, router}) {
  return (
    <div>
      <FooterCTA />
      <div className="grid grid-cols-2 gap-12">
        {props.map((item, index) => {
          return <FooterColumn key={index} title={item.title} props={item.links} router={router} />;
        })}
      </div>
    </div>
  );
}
