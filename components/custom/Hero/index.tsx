import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { appStringMap } from "@appString/appStringMap";

import Link from "next/link";
import { HeroImage } from "./heroImage";

export const Hero: React.FC = () => {
  const {
    pages: { Home },
  } = appStringMap;

  return (
    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          {Home.title}
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {Home.description}
        </p>
        <div className="md:text-left text-center flex md:flex-row flex-col">
          <Link
            className={cn(
              buttonVariants({
                variant: Home.link1.variant,
                size: Home.link1.size.pc,
              })
            )}
            href={Home.link1.href}
          >
            {Home.link1.name}
          </Link>
          <Link
            className={cn(
              buttonVariants({
                variant: Home.link2.variant,
                size: Home.link2.size.pc,
              })
            )}
            href={Home.link2.href}
          >
            {Home.link2.name}
          </Link>
        </div>
      </div>

      <HeroImage url={Home.heroImage.hero.url} alt={Home.heroImage.hero.alt} />
    </section>
  );
};
