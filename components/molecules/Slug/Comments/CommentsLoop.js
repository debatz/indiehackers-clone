import CommentsAuthorBadge from "@/components/atoms/Slug/Comments/CommentsAuthorBadge";
import CommentsUpvotes from "@/components/atoms/Slug/Comments/CommentsUpvotes";
import CommentsAuthorTitle from "@/components/atoms/Slug/Comments/CommentsAuthor";
import CommentsReplyTitle from "@/components/atoms/Slug/Comments/CommentsReplyTitle";
import CommentsTimeTitle from "@/components/atoms/Slug/Comments/CommentsTimeTitle";
import ReactMarkdown from "react-markdown";
import { diffDays } from "utils/dateDifference";

export default function CommentsLoop({ props }) {
  const currentDate = new Date();
  return (
    <ul className="space-y-6">
      {props.comments.map((item, index) => {
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
              <CommentsTimeTitle>
                {diffDays(currentDate, new Date(item.created_at))} days ago
              </CommentsTimeTitle>
              <span>·</span>
              <CommentsReplyTitle>REPLY</CommentsReplyTitle>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
