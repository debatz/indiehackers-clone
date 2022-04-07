import FooterColumn from "@/components/molecules/Index/Footer/FooterColumn";
import FooterCTA from "@/components/molecules/Index/Footer/FooterCTA";
import FooterInfo from "@/components/atoms/Index/Footer/FooterInfo";
import FooterAttribution from "@/components/molecules/Index/Footer/FooterAttribution";
import FooterLegal from "@/components/molecules/Index/Footer/FooterLegal";

export default function Footer({ props, router }) {
  return (
    <div className="md:mx-48">
      <FooterCTA />
      <div className="md:flex md:flex-row-reverse md:items-center">
        <div className="grid grid-cols-3 gap-4 py-12 md:w-1/2">
          {props.map((item, index) => {
            return (
              <FooterColumn
                key={index}
                title={item.title}
                props={item.links}
                router={router}
              />
            );
          })}
        </div>
        <div className="space-y-3 md:w-1/2 md:justify-between">
          <FooterAttribution />
          <FooterInfo>
            Learn from the founders behind hundreds of profitable online
            businesses, and connect with others who are starting and growing
            their own companies.
          </FooterInfo>
          <FooterLegal />
        </div>
      </div>
    </div>
  );
}
