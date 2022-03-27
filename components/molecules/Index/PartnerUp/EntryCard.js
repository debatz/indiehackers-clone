import { HeroIcon } from "@/components/atoms/HeroIcon";
import EntryTitle from "@/components/atoms/Index/PartnerUp/EntryTitle";
import EntryAge from "@/components/atoms/Index/PartnerUp/EntryAge";

export default function EntryCard({ props }) {
  const diffDays = (date, otherDate) =>
    Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
  const currentDate = new Date();
  return (
    <div className="flex items-start">
      <div className="flex items-start space-x-1.5">
        <HeroIcon className="text-[#b6cce2] w-6 h-6" icon={props.icon} />
        <EntryTitle>{props.title}</EntryTitle>
      </div>
      <div className="ml-2">
        <EntryAge>
          {diffDays(currentDate, new Date(props.datePosted))}d
        </EntryAge>
      </div>
    </div>
  );
}
