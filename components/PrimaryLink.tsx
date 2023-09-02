import Link from "next/link";

export default function PrimaryLink({ title }) {
  return (
    <Link
      href="#"
      className="bg-sky-900 text-sky-100 m-1 p-2 rounded-lg hover:bg-sky-950 transition-colors ease-in-out"
      type="link"
    >
      {title}
    </Link>
  );
}
