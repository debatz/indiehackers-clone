import { twClass } from 'utils/twClass';

export default function Container({ className, children }) {
  return <div className={twClass(
    "mx-4 lg:mx-auto",
    className && `${className}`
  )}>{children}</div>;
}
