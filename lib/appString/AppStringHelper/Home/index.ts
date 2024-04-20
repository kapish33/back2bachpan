import { NavLink } from "@constants/index";

const HomeLink1 = NavLink({
  variant: "ghost",
  size: { mobile: "sm", pc: "default" },
  name: "Home",
  href: "/",
});

const HomeLink2 = NavLink({
  variant: "outline",
  size: { mobile: "sm", pc: "default" },
  name: "About",
  href: "/about",
});

export { HomeLink1, HomeLink2 };
