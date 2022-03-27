import PostCardDesktop from "./PostCardDesktop";
import Border from "@/components/atoms/Border";
import PaginationTitle from "@/components/atoms/Index/PostLoop/PaginationTitle";
import PagTitleDesktop from "@/components/atoms/Index/PostLoop/PagTitleDesktop";

export default function PostLoopDesktop({ props }) {
  return (
    <div className='mt-4'>
      {props.map((i, index) => {
        return (
          <div key={index} className="my-4">
            <PostCardDesktop
              title={i.title}
              author={i.author}
              collectionName={i.collection_name}
              collectionBadge={i.collection_badge}
              upvotes={i.upvotes}
              comments={i.comments}
              authorBadge={i.author_badge}
            />
          </div>
        );
      })}
      <PagTitleDesktop className="bg-[#0e2439] -mb-3 ml-14 w-fit">
        Next Page
      </PagTitleDesktop>
    </div>
  );
}
