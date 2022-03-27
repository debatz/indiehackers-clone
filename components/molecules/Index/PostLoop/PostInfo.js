import { HeroIcon } from "@/components/atoms/HeroIcon";
import InfoText from "@/components/atoms/Index/PostLoop/InfoText";

export default function PostInfo({
  collection,
  collectionName,
  collectionBadge,
  upvotes,
  comments,
}) {
  return (
    <div className="flex space-x-3">
      <div className="flex items-center space-x-1">
        <picture>
          <source srcSet={collectionBadge} type="image/webp" />
          <img
            className="w-4 h-4 rounded-full"
            src="/nonexistent-image.png"
            alt="Collection Image"
          />
        </picture>
        {collection && <InfoText>{collectionName}</InfoText>}
      </div>

      <div className="flex items-center space-x-1">
        <HeroIcon
          icon="ChevronUpIcon"
          className="w-5 text-[#9cb3c9] opacity-50"
        />
        <InfoText>{upvotes}</InfoText>
      </div>

      <div className="flex items-center space-x-1">
        <HeroIcon
          icon="ChatIcon"
          className="h-4 w-4 text-[#9cb3c9] opacity-50"
        />
        <InfoText>{comments}</InfoText>
      </div>
    </div>
  );
}
