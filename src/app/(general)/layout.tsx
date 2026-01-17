import { Navbar } from '@/src/components';
// import Link from 'next/link';

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-2">
        {children}
        {/* <button className="bg-white text-black rounded-lg w-30 h-10 hover:scale-110 hover:bg-gray-500 cursor-pointer">
          <Link href={'/home'}>Home</Link>
        </button> */}
      </main>
    </>
  );
}
