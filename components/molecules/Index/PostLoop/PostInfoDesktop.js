import { HeroIcon } from "@/components/atoms/HeroIcon";
import AuthorName from "@/components/atoms/Index/PostLoop/AuthorName";
import InfoText from "@/components/atoms/Index/PostLoop/InfoText";

export default function PostInfo({
  author,
  collection,
  collectionName,
  collectionBadge,
  upvotes,
  comments,
}) {
  return (
    <div className="flex space-x-2">
      <div className="flex items-center space-x-2">
        <AuthorName>{author}</AuthorName>
        <InfoText>·</InfoText>
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
      </div>
      <InfoText>·</InfoText>
      <div className="flex items-center space-x-1">
        <InfoText>{comments} comments</InfoText>
      </div>
    </div>
  );
}
