import PostCard from "./PostCard";
import Border from "@/components/atoms/Border";
import PaginationTitle from "@/components/atoms/Index/PostLoop/PaginationTitle";

export default function PostLoop({props}) {
  return (
    <div>
      {props.map((i, index) => {
        return (
          <div key={index}>
            <PostCard
              slug={i.slug}
              title={i.title}
              author={i.author}
              collectionName={i.collection_name}
              collectionBadge={i.collection_badge}
              upvotes={i.upvotes}
              comments={i.comments}
              authorBadge={i.author_badge}
            />
            <Border className="my-3" />
          </div>
        );
      })}
      <PaginationTitle>Next Page</PaginationTitle>
    </div>
  );
}
