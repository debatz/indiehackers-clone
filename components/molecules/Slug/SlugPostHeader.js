import SlugPostTitle from '@/components/atoms/Slug/SlugPostTitle';
import SlugAuthorTitle from '@/components/atoms/Slug/SlugAuthorTitle';

export default function SlugPostHeader({title, author}) {
  return (
    <div className="flex flex-col items-center space-y-5 text-center">
      <SlugPostTitle>{title}</SlugPostTitle>
      <SlugAuthorTitle>by {author}</SlugAuthorTitle>
    </div>
  );
}
