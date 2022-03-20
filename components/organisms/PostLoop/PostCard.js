import PostTitle from "@/components/atoms/PostLoop/PostTitle";
import PostInfo from "@/components/molecules/PostLoop/PostInfo";
import AuthorBadge from "@/components/atoms/PostLoop/AuthorBadge";

export default function PostCard() {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <PostTitle>Where do you hang out online?</PostTitle>
        <PostInfo />
      </div>
      <AuthorBadge />
    </div>
  );
}
