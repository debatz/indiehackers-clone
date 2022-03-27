import { HeroIcon } from "../../HeroIcon";

export default function PaginationTitle({ children }) {
  return (
    <div className='flex items-center space-x-1'>
      <span className="text-sm font-semibold uppercase text-[#b6cce2] opacity-50">
        {children}
      </span>
      <HeroIcon className="w-3.5 text-[#b6cce2] opacity-50" icon="ArrowRightIcon" />
    </div>
  );
}
