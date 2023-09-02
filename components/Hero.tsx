import Image from "next/image";
import { PrimaryLink, SecondaryLink } from ".";

export default function Hero() {
  return (
    <div className="flex flex-col items-center content-center bg-sky-100 p-5 rounded-2xl text-sky-900">
      <h1 className="mt-10 mb-5">find any car at any time -with ease!</h1>
      <div className="relative w-full h-64 mb-5">
        <Image src="/hero-image.jpg" alt="" fill objectFit="cover" className="rounded-lg" />
      </div>

      <p className="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aut,
        tempora dolores ratione facere magni, suscipit culpa a aperiam
        accusantium architecto eveniet vitae.
      </p>

      <div className="flex flex-row mt-5">
        <PrimaryLink title="See Cars" />
        <SecondaryLink title="Reach Us" />
      </div>
    </div>
  );
}
