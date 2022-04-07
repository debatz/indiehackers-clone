import FooterTitle from "@/components/atoms/Index/Footer/FooterTitle";
import FooterDescription from "@/components/atoms/Index/Footer/FooterDescription";
import { HeroIcon } from "@/components/atoms/HeroIcon";

export default function FooterCTA() {
  return (
    <div className="md:flex md:flex-col md:items-center">
      <div className="space-y-3 text-center">
        <FooterTitle>Stay informed as an indie hacker.</FooterTitle>
        <FooterDescription>
          Market insights that help you start and grow your business.
        </FooterDescription>
        <div className="flex items-center bg-[#1f364d] w-full justify-between px-2">
          <input
            className="px-2 py-4 text-lg bg-transparent"
            value=""
            name="email"
            required="true"
            placeholder="Enter email address"
            type="email"
          />
          <button className="flex items-center p-3 w-11 h-11 rounded-sm bg-gradient-to-r from-[#e052a0] to-[#f15c41] hover:bg-gradient-to-r hover:from-[#3ec7e0] hover:to-[#526bf4]">
            <HeroIcon className="w-6 h-6 text-white" icon="ArrowRightIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}
