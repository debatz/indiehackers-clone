import SlugCommentsBox from "@/components/molecules/Slug/Comments/CommentsBox";
import CommentsLoop from "@/components/molecules/Slug/Comments/CommentsLoop";

export default function Comments({ props }) {
  return (
    <div className="space-y-10">
      <SlugCommentsBox author={props.author} />
      <CommentsLoop props={props} />
    </div>
  );
}
