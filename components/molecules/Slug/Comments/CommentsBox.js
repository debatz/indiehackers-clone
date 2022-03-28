import SlugCommentsButton from '@/components/atoms/Slug/Comments/CommentsButton';
import SlugCommentsInput from '@/components/atoms/Slug/Comments/CommentsInput';

export default function SlugCommentsBox({author}) {
    return(
        <div className='flex flex-col space-y-3'>
            <SlugCommentsInput author={author}></SlugCommentsInput>
            <SlugCommentsButton className="uppercase w-fit">Post comment</SlugCommentsButton>
        </div>
    )
}