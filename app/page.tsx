import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-6">
      <h1 className="text-2xl">build a sass</h1>
      <Link href="/chat">Get Started</Link>
      <Link href="/pricing">Pricing</Link>
    </main>
  );
}
