import { HeroIcon } from "@/components/atoms/HeroIcon";
import InfoText from "@/components/atoms/PostLoop/InfoText";

export default function PostInfo() {
  return (
    <div className="flex space-x-3">
      <div className="flex items-center space-x-0.5">
        <picture>
          <source
            srcSet="https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/no-code/28x28_no-code.webp?ts=1"
            type="image/webp"
          />
          <source
            srcSet="https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/no-code/no-code"
            type="image/png"
          />
          <source
            srcSet="https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/no-code/no-code"
            type="image/jpeg"
          />
          <img
            className="w-4 h-4"
            src="/nonexistent-image.png"
            alt="Collection Image"
          />
        </picture>
        <InfoText>No-Code</InfoText>
      </div>

      <div className="flex items-center space-x-1">
        <HeroIcon icon="ChevronUpIcon" className="w-5 text-[#9cb3c9]" />
        <InfoText>7</InfoText>
      </div>

      <div className="flex items-center space-x-1">
        <HeroIcon icon="ChatIcon" className="h-4 w-4 text-[#9cb3c9]" />
        <InfoText>13</InfoText>
      </div>
    </div>
  );
}
