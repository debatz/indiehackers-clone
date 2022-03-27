import { twClass } from "utils/twClass";

export default function MeetupTitle({ className, children }) {
  return (
    <h3 className={twClass(
      "font-normal text-[#b6cce2]",
       className && `${className}`
       )}
       >
      {children}
    </h3>
  );
}
