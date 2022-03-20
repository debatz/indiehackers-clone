export default function AuthorBadge() {
  return (
    <div>
      <picture>
        <source
          srcSet="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_jOi6X6JsNPQgVBZjk6Qb2fQIPDu1.webp"
          type="image/webp"
        />
        <source
          srcSet="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/jOi6X6JsNPQgVBZjk6Qb2fQIPDu1"
          type="image/png"
        />
        <source
          srcSet="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/jOi6X6JsNPQgVBZjk6Qb2fQIPDu1"
          type="image/jpeg"
        />
        <img
          className="w-8 h-8 rounded-full border-[3px] border-[#1f364d]"
          src="/nonexistent-image.png"
          alt="Avatar Image"
        ></img>
      </picture>
    </div>
  );
}
