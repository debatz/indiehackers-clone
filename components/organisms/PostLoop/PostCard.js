import PostTitle from "@/components/atoms/PostLoop/PostTitle";
import PostInfo from "@/components/molecules/PostLoop/PostInfo";
import AuthorBadge from "@/components/atoms/PostLoop/AuthorBadge";
import { twClass } from "utils/twClass";

export default function PostCard({
  className,
  title,
  collection,
  collectionName,
  upvotes,
  comments,
}) {
  return (
    <div
      className={twClass("flex justify-between", className && `${className}`)}
    >
      <div className="space-y-1">
        <PostTitle>{title}</PostTitle>
        <PostInfo
          collection={collection}
          collectionName={collectionName}
          upvotes={upvotes}
          comments={comments}
        />
      </div>
      <AuthorBadge />
    </div>
  );
}
