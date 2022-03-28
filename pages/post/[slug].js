import { supabase } from "utils/supabase";
import Comments from "@/components/organisms/Slug/Comments/Comments";
import PostContent from "@/components/organisms/Slug/PostContent";

export default function Post({ post }) {
  return (
    <div className="mx-4 space-y-12">
      <PostContent props={post} />
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
