import { twClass } from 'utils/twClass';

export default function Container({ className, children }) {
  return <div className={twClass(
    "mx-4 lg:mx-28",
    className && `${className}`
  )}>{children}</div>;
}
