import { HeroIcon } from "../../HeroIcon";

export default function Upvotes({ props }) {
  return (
    <div className="flex flex-col items-center -space-y-2">
      <HeroIcon className="text-[#9cb3c9] w-6 h-6" icon="ChevronUpIcon" />
      <span className="text-[#9cb3c9]">{props}</span>
    </div>
  );
}
