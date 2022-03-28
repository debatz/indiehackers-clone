import SlugPostHeader from "@/components/molecules/Slug/SlugPostHeader";
import SlugPostContent from "@/components/atoms/Slug/SlugPostContent";
import { dateFormatter } from "utils/dateFormatter";

export default function PostContent({ props }) {
  return (
    <div className='space-y-12'>
      <SlugPostHeader title={props.title} author={props.author} />
      <SlugPostContent>{props.content}</SlugPostContent>
      <div className="flex flex-wrap items-center space-x-1 text-[#d1d5db] text-xl">
        <span>—</span>
        <span className="text-[#5aa3ed]">{props.author}</span>
        <span>posted to</span>
        <div className="flex items-center space-x-1">
          <img
            className="w-6 h-6"
            src={props.collection_badge}
            alt={props.collection_name}
          />
          <span className="text-[#5aa3ed]">{props.collection_name}</span>
        </div>
        <span>on</span>
        <span>{dateFormatter(props.created_at)}</span>
      </div>
    </div>
  );
}
