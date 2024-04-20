import { Hero } from "@/components/custom/Hero";
import { ShowCase } from "@/components/custom/ShowCase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Hero />
      <ShowCase />
    </main>
  );
}
