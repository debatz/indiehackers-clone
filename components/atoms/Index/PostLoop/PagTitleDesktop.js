import { HeroIcon } from "@/components/atoms/HeroIcon";
import { twClass } from 'utils/twClass';

export default function PagTitleDesktop({children, className}) {
  return (
    <div className={twClass(
      "flex space-x-1 text-white px-2",
      className && `${className}`
    )}>
      <h3 className="font-semibold">{children}</h3>
      <HeroIcon className="w-4" icon="ArrowRightIcon" />
    </div>
  );
}
