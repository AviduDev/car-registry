import Link from "next/link";

export default function SecondaryLink({ title }) {
  return (
    <Link href="#" className="text-sky-900 m-1 p-2 hover:text-sky-950 ease-in-out transition-colors">
      {title}
    </Link>
  );
}
