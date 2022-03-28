export default function SlugCommentsInput({ author }) {
  return (
    <textarea
      placeholder={`Say something nice to ${author}`}
      className="bg-transparent border-[3px] border-[#233b53] text-white outline-none p-4"
    ></textarea>
  );
}
