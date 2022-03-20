import { twClass } from "utils/twClass";

export default function TimeFilterTitle({ children, isActive }) {
  return (
    <span
      className={twClass(
        "text-sm font-semibold uppercase",
        isActive && "text-white",
        !isActive && "text-[#b6cce2]"
      )}
    >
      {children}
    </span>
  );
}
