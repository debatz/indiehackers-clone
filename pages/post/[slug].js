import { supabase } from "utils/supabase";
import urlSlug from "url-slug";

export default function Post({ post }) {
  console.log(post);
  return (
    <div>
      <h1 className="mt-4 text-5xl font-semibold tracking-wide">
        {post.title}
      </h1>
      <ul>
      {post.comments.map((item, index) => {
        return(
          <li key={index}>
            <p>{item.content}</p>
          </li>
        )
      })}
      </ul>
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
