import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="w-ful flex flex-row align-middle relative">
        <div className="h-64 w-64">
          <Image
            src="/vercel.svg"
            alt=""
            height={50}
            width={50}
            objectPosition="center"
            objectFit="contain"
            className="abosolute"
          />
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
