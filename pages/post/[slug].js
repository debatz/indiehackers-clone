import { supabase } from "utils/supabase";
import SlugPostContent from "@/components/atoms/Slug/SlugPostContent";
import SlugPostHeader from "@/components/molecules/Slug/SlugPostHeader";
import { dateFormatter } from "utils/dateFormatter";
import Comments from "@/components/organisms/Slug/Comments/Comments";

export default function Post({ post }) {
  return (
    <div className="mx-4 space-y-12">
      <SlugPostHeader title={post.title} author={post.author} />
      <SlugPostContent>{post.content}</SlugPostContent>
      <div className="flex flex-wrap items-center space-x-1 text-[#d1d5db] text-xl">
        <span>—</span>
        <span className="text-[#5aa3ed]">{post.author}</span>
        <span>posted to</span>
        <div className="flex items-center space-x-1">
          <img
            className="w-6 h-6"
            src={post.collection_badge}
            alt={post.collection_name}
          />
          <span className="text-[#5aa3ed]">{post.collection_name}</span>
        </div>
        <span>on</span>
        <span>{dateFormatter(post.created_at)}</span>
      </div>
      <Comments props={post} />
    </div>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("posts").select("slug");
  const paths = data.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .eq("slug", params.slug)
    .single();

  if (error) {
    console.log(error.message);
  }

  return {
    props: {
      post,
    },
  };
}
