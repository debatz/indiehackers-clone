import MobileTitleBarActions from "../molecules/MobileTitleBarActions";
import TitleBarLabel from "../atoms/TitleBarLabel";
import TitleBarLink from "../atoms/TitleBarLink";

export default function TitleBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#1f364d] border-[#9cb3c9] mt-0.5">
      {/* Mobile: Logo + Burger Menu + Search  */}
      <MobileTitleBarActions />
      {/* /Mobile: Logo + Burger Menu + Search  */}
      <div>
        <TitleBarLink>
          <TitleBarLabel>Log In</TitleBarLabel>
          <TitleBarLabel>Sign Up</TitleBarLabel>
        </TitleBarLink>
      </div>
    </nav>
  );
}
