import { supabase } from "utils/supabase";
import urlSlug from "url-slug";

export default function Post({ post }) {
  return (
    <div>
      <h1 className="mt-4 text-5xl font-semibold tracking-wide">
        {post.title}
      </h1>
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
  const { slug } = params;
  const { data } = await supabase
    .from("posts")
    .select()
    .filter("slug", "eq", slug)
    .single();
  return {
    props: {
      post: data,
    },
  };
}
