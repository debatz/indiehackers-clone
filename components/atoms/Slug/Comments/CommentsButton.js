import { twClass } from "utils/twClass";

export default function SlugCommentsButton({ children, className }) {
  return (
    <button
      className={twClass(
        "py-2.5 px-3 text-base font-semibold text-white uppercase bg-gradient-to-r from-[#e052a0] to-[#f15c41] hover:bg-gradient-to-r hover:from-[#3ec7e0] hover:to-[#526bf4] rounded-sm",
        className && `${className}`
      )}
    >
      {children}
    </button>
  );
}
