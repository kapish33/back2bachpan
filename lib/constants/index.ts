import { buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { Url } from "next/dist/shared/lib/router/router";

type css = VariantProps<typeof buttonVariants>;

interface navigation {
  variant: css["variant"];
  name: string;
  href: Url;
  size: {
    pc: css["size"];
    mobile: css["size"];
  };
}

export const NavLink = ({ variant, size, name, href }: navigation): navigation => {
  return {
    variant: variant,
    size: size,
    name: name,
    href: href,
  };
};

export const Navigation: Array<navigation> = [
  NavLink({
    variant: "link",
    size: { mobile: "sm", pc: "default" },
    name: "Home",
    href: "/",
  }),
  NavLink({
    variant: "secondary",
    size: { mobile: "sm", pc: "default" },
    name: "About",
    href: "/about",
  }),
];
