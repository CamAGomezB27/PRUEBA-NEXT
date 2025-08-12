import { Navbar } from '@/src/components';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-2">
        <h1 className="text-lg">Hola Mundo</h1>
        {children}
      </main>
    </>
  );
}
