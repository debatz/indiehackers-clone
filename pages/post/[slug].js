import { supabase } from "utils/supabase";
import SlugPostContent from "@/components/atoms/Slug/SlugPostContent";
import SlugPostHeader from "@/components/molecules/Slug/SlugPostHeader";
import { dateFormatter } from "utils/dateFormatter";
import SlugComments from "@/components/organisms/Slug/SlugComments";
import ReactMarkdown from "react-markdown";
import CommentsAuthorBadge from "@/components/atoms/Slug/Comments/CommentsAuthorBadge";
import CommentsUpvotes from "@/components/atoms/Slug/Comments/CommentsUpvotes";
import CommentsAuthorTitle from '@/components/atoms/Slug/Comments/CommentsAuthor';
import CommentsReplyTitle from '@/components/atoms/Slug/Comments/CommentsReplyTitle';
import CommentsTimeTitle from '@/components/atoms/Slug/Comments/CommentsTimeTitle';
import { diffDays } from 'utils/dateDifference';

export default function Post({ post }) {
  const currentDate = new Date();
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
      <SlugComments author={post.author} />

      <ul className="space-y-6">
        {post.comments.map((item, index) => {
          return (
            <li className="space-y-3" key={index}>
              <div className="flex space-x-2">
                <CommentsUpvotes props={item.upvotes} />
                <ReactMarkdown className="prose prose-lg prose-invert">
                  {item.content}
                </ReactMarkdown>
              </div>
              <div className="flex items-center space-x-2 text-[#63809c]">
                <CommentsAuthorBadge authorBadge={item.author_badge} />
                <CommentsAuthorTitle>{item.author}</CommentsAuthorTitle>
                <span>·</span>
                <CommentsTimeTitle>{diffDays(currentDate, new Date(item.created_at))} days ago</CommentsTimeTitle>
                <span>·</span>
                <CommentsReplyTitle>REPLY</CommentsReplyTitle>
              </div>
            </li>
          );
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
