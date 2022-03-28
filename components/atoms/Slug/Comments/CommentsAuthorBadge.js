export default function CommentsAuthorBadge({ authorBadge }) {
  return (
    <div className="ml-5 sm:ml-0 min-w-max">
      {/* It might be cheesy as hell but it's just so much easier 
      to just fix the badge's size and let the text do the smart thing. 
      Works like a charm.  
      Don't hate the player...
      */}
      <picture>
        <source srcSet={authorBadge} type="image/webp" />
        <img
          className="w-6 h-6 rounded-full sm:w-8 sm:h-8"
          src="/nonexistent-image.png"
          alt="Avatar Image"
        ></img>
      </picture>
    </div>
  );
}
