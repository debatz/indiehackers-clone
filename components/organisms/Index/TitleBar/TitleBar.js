import MobileTitleBarActions from "../../../molecules/Index/TitleBar/MobileTitleBarActions";
import TitleBarLabel from "../../../atoms/Index/TitleBar/TitleBarLabel";
import TitleBarLink from "../../../atoms/Index/TitleBar/TitleBarLink";
import TitleBarActions from "../../../molecules/Index/TitleBar/TitleBarActions";
import Logo from "@/components/atoms/Logo";

export default function TitleBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#1f364d] border-[#9cb3c9] mt-0.5">
      {/* Mobile: Logo + Burger Menu + Search  */}
      <MobileTitleBarActions className="sm:hidden" />

      {/* Destkop  */}
      <TitleBarActions className="hidden sm:flex" />
      <div className="hidden sm:space-x-3 sm:items-center sm:flex">
        <Logo />
        <h1 className="text-lg font-semibold text-white">INDIE HACKERS</h1>
      </div>

      <div>
        <TitleBarLink>
          <TitleBarLabel>Log In</TitleBarLabel>
          <TitleBarLabel>Sign Up</TitleBarLabel>
        </TitleBarLink>
      </div>
    </nav>
  );
}
