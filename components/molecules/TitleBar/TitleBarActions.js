import { HeroIcon } from "@/atoms/HeroIcon";
import Logo from "@/components/atoms/Logo";
import { twClass } from "utils/twClass";

export default function TitleBarActions({ className }) {
  return (
    <div
      className={twClass(
        "flex items-center space-x-4",
        className && `${className}`
      )}
    >
      <div className="flex space-x-4">
        <HeroIcon icon="MenuIcon" className="h-7 text-[#9cb3c9] opacity-50" />
        <HeroIcon icon="SearchIcon" className="h-7 text-[#9cb3c9] opacity-50" />
      </div>
    </div>
  );
}
