import { assets } from "@/assets";
import { HomeLink1, HomeLink2 } from "./AppStringHelper/Home";
import { FooterData } from "./AppStringHelper/Shared/Footer";
import { homeImages } from "./AppStringHelper/imagePropsFormer";

export const appStringMap = {
  shared: {
    footer: FooterData,
  },
  pages: {
    Home: {
      homeIcon: assets.homeIcon,
      title: "Empowering Wellness & Connection",
      description:
        "Transforming lives through innovative web design and holistic wellness programs. Let's work together to create a brighter future.",
      link1: HomeLink1,
      link2: HomeLink2,
      heroImage: homeImages,
    },
  },
};
