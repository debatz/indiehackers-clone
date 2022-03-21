import { HeroIcon } from "@/components/atoms/HeroIcon";

export default function PartnerSectionTitle({ children }) {
  return (
    <div className="flex space-x-1 text-white">
      <h3 className="font-semibold border-b-2 border-[#182f45]">{children}</h3>
      <HeroIcon className="w-4" icon="ArrowRightIcon" />
    </div>
  );
}
