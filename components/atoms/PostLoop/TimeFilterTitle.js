import { twClass } from "utils/twClass";

export default function TimeFilterTitle({ children, isActive }) {
  return (
    <span
      className={twClass(
        "text-sm font-semibold text-[#b6cce2] uppercase",
        isActive && "text-white"
      )}
    >
      {children}
    </span>
  );
}
