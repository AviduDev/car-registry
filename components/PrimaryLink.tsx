import { CustomLinkProps } from "@/types";
import Link from "next/link";

// CustomLinkProps is fo type safety
export default function PrimaryLink({ title, customStyles, href }: CustomLinkProps) {
  return (
    <Link
      href={href}
      //   here we are passing custom styles
      className={`bg-sky-900 text-sky-100 m-1 p-2 rounded-lg hover:bg-sky-950 transition-colors ease-in-out ${customStyles}`}
      type="link"
    >
      {/* button title prop */}
      {title}
    </Link>
  );
}
