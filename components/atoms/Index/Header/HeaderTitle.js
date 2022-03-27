import { twClass } from "utils/twClass";

export default function HeaderTitle({ children, isActive }) {
  return (
    <span
      className={twClass(
        "text-lg font-semibold border-b-[3px] border-transparent",
        !isActive && "text-[#b6cce2]",
        isActive && "text-white border-b-[#4799eb]"
      )}
    >
      {children}
    </span>
  );
}
