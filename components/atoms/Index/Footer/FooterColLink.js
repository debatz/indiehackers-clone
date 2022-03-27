import { twClass } from "utils/twClass";
import { HeroIcon } from "../../HeroIcon";

export default function FooterColLink({ isActive, children, icon }) {
  return (
    <a
      className={twClass(
        "",
        isActive && "text-white",
        !isActive && "text-[#63809c]",
        icon && "text-[#4799eb] font-semibold"
      )}
    >
      <div className="flex items-center space-x-1">
        <span>{children}</span>
        <span>
          {icon && <HeroIcon className="w-4" icon="ArrowRightIcon" />}
        </span>
      </div>
    </a>
  );
}
