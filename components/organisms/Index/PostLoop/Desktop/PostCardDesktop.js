import PostTitle from "@/components/atoms/Index/PostLoop/PostTitle";
import PostInfoDesktop from "@/components/molecules/Index/PostLoop/PostInfoDesktop";
import AuthorBadge from "@/components/atoms/Index/PostLoop/AuthorBadge";
import { twClass } from "utils/twClass";
import Upvotes from "@/components/atoms/Index/PostLoop/Upvotes";

export default function PostCardDesktop({
  className,
  title,
  author,
  collection,
  collectionName,
  collectionBadge,
  upvotes,
  comments,
  authorBadge,
}) {
  return (
    <div
      className={twClass(
        "flex justify-start items-center space-x-3 -ml-4",
        className && `${className}`
      )}
    >
      <div className="flex items-center space-x-3">
        <AuthorBadge authorBadge={authorBadge} />
        <Upvotes props={upvotes} />
      </div>
      <div className="space-y-2">
        <PostTitle>{title}</PostTitle>
        <PostInfoDesktop
          author={author}
          collection={collection}
          collectionBadge={collectionBadge}
          collectionName={collectionName}
          upvotes={upvotes}
          comments={comments}
        />
      </div>
    </div>
  );
}
