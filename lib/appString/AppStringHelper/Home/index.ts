import { NavLink } from "@constants/index";

const HomeLink1 = NavLink({
  variant: "ghost",
  size: { mobile: "sm", pc: "default" },
  name: "Mera Sathi Helpline",
  href: "mera-sathi-helpline",
});

const HomeLink2 = NavLink({
  variant: "outline",
  size: { mobile: "sm", pc: "default" },
  name: "2nd Innings Wellness Programs",
  href: "2nd-innings-wellness-programs",
});

export { HomeLink1, HomeLink2 };
