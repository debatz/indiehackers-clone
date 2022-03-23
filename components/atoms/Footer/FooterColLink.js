import { twClass } from "utils/twClass";
import { HeroIcon } from "../HeroIcon";

export default function FooterColLink({ isActive, children, icon }) {
  console.log(icon);
  return (
    <a
      className={twClass(
        "",
        isActive && "text-white",
        !isActive && "text-[#63809c]"
      )}
    >
      <div className="flex items-center space-x-1">
        <span>{children}</span>
        <span>
          {icon !== "" && <HeroIcon className="w-4" icon="ArrowRightIcon" />}
        </span>
      </div>
    </a>
  );
}
