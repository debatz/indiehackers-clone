import { HeroIcon } from "@/atoms/HeroIcon";
import Logo from '@/components/atoms/Logo';
import { twClass } from "utils/twClass";

export default function MobileTitleBarActions({ className }) {
  return (
    <div className={twClass("flex items-center space-x-4", className && `${className}`)}>
      <Logo />
      <HeroIcon icon="MenuIcon" className="h-7 text-[#9cb3c9]" />
      <HeroIcon icon="SearchIcon" className="h-7 text-[#9cb3c9]" />
    </div>
  );
}
