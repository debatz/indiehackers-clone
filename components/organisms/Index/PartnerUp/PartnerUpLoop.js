import PartnerSectionTitle from "@/components/atoms/Index/PartnerUp/PartnerSectionTitle";
import EntryCard from "@/components/molecules/Index/PartnerUp/EntryCard";

export default function PartnerUpLoop({ props }) {
  return (
    <div className="space-y-5">
      <PartnerSectionTitle>Partner Up</PartnerSectionTitle>
      <div className="space-y-3">
        {props.map((item, index) => {
          return <EntryCard props={item} key={index} />;
        })}
      </div>
    </div>
  );
}
