export default function JobBadge({ jobBadge }) {
  return (
    <div className="min-w-max">
      {/* It might be cheesy as hell but it's just so much easier 
      to just fix the badge's size and let the text do the smart thing. 
      Works like a charm.  
      Don't hate the player...
      */}
      <picture>
        <source srcSet={jobBadge} type="image/webp" />
        <img
          className="w-9 h-9 rounded-full border-[3px] border-[#1f364d]"
          src="/nonexistent-image.png"
          alt="Avatar Image"
        ></img>
      </picture>
    </div>
  );
}
