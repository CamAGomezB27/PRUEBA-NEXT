import { Navbar } from "@/components";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-2">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
