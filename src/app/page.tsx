import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <span className="text-5xl">Hola Mundo</span>

        <button className="bg-white text-black rounded-lg w-30 h-10 hover:scale-110 hover:bg-gray-500 cursor-pointer">
          <Link href={"/about"}>About Page</Link>
        </button>
      </main>
    </div>
  );
}
