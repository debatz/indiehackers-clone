import PostCard from "./PostCard";
import Border from "@/components/atoms/Border";
import PaginationTitle from "@/components/atoms/PostLoop/PaginationTitle";

export default function PostLoop({props}) {
  return (
    <div>
      {props.map((i, index) => {
        return (
          <div key={index}>
            <PostCard
              title={i.title}
              collection={i.collection}
              collectionName={i.collectionName}
              collectionBadge={i.collectionBadge}
              upvotes={i.upvotes}
              comments={i.comments}
              authorBadge={i.authorBadge}
            />
            <Border className="my-3" />
          </div>
        );
      })}
      <PaginationTitle>Next Page</PaginationTitle>
    </div>
  );
}
