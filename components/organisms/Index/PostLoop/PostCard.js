import PostTitle from "@/components/atoms/Index/PostLoop/PostTitle";
import PostInfo from "@/components/molecules/Index/PostLoop/PostInfo";
import AuthorBadge from "@/components/atoms/Index/PostLoop/AuthorBadge";
import { twClass } from "utils/twClass";

export default function PostCard({
  className,
  title,
  collection,
  collectionName,
  collectionBadge,
  upvotes,
  comments,
  authorBadge,
}) {
  return (
    <div
      className={twClass("flex justify-between", className && `${className}`)}
    >
      <div className="space-y-2">
        <PostTitle>{title}</PostTitle>
        <PostInfo
          collection={collection}
          collectionBadge={collectionBadge}
          collectionName={collectionName}
          upvotes={upvotes}
          comments={comments}
        />
      </div>
      <AuthorBadge authorBadge={authorBadge} />
    </div>
  );
}