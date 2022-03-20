import { twClass } from "utils/twClass";

export default function Border({ className }) {
  return (
    <div
      className={twClass(
        "border-[#182f45] border-b border-dotted",
        className && `${className}`
      )}
    ></div>
  );
}
