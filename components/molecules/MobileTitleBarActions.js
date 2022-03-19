import { HeroIcon } from "../atoms/HeroIcon";

export default function MobileTitleBarActions() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-6 bg-white">
        <img src="/indiehackerslogo.svg" alt="IndieHackers logo" />
      </div>
      <HeroIcon icon="MenuIcon" className="h-7 text-[#9cb3c9]" />
      <HeroIcon icon="SearchIcon" className="h-7 text-[#9cb3c9]" />
    </div>
  );
}
