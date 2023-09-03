import { CustomLinkProps } from "@/types";
import Link from "next/link";

// CustomLinkProps is for type safety
export default function SecondaryLink({
  title,
  customStyles,
  href
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      //   here we passes custom styles from the root
      className={`text-sky-900 m-1 p-2 hover:text-sky-950 ease-in-out transition-colors underline ${customStyles}`}
    >
      {/* button title pops */}
      {title}
    </Link>
  );
}
