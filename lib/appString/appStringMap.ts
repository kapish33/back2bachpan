import { assets } from "@/assets";
import { HomeLink1, HomeLink2 } from "./AppStringHelper/Home";
import { homeImages } from "./AppStringHelper/imagePropsFormer";

export const appStringMap = {
  menu: {
    subMenu: {
      text: "Go to Earth",
      title: "Verify your are alive",
      deep: {
        moredeep: {
          text: "Verify your are sigma Male",
        },
        test: `The mobile number of {name} is {phone.mobile}`,
      },
    },
  },
  companyLogo: "M S D C",
  footer: {
    heading: "Let's work Together",
    email: {
      url: "mailto:info@manavsachdevdesign.com",
      text: "info@manavsachdevdesign.com",
    },
    address: {
      name: "Manav Sachdev Design Studio 1502, 15th Floor Galleria Towers, Galleria Market DLF Phase IV, Sector 28 Gurugram, Haryana 122009",
      url: "https://www.google.com/maps/dir//Manav+Sachdev+Design+Studio+1502,+15th+Floor+Galleria+Towers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d18db2effffff:0xc1795ad7524cb488?sa=X&ved=2ahUKEwj_08-9sdWBAxXKilYBHYbMB6oQ9Rd6BAg3EAA&ved=2ahUKEwj_08-9sdWBAxXKilYBHYbMB6oQ9Rd6BAhCEAU",
    },
  },
  shared: {
    address: {
      name: "Manav Sachdev Design Studio 1502, 15th Floor Galleria Towers, Galleria Market DLF Phase IV, Sector 28 Gurugram, Haryana 122009",
      url: "https://www.google.com/maps/dir//Manav+Sachdev+Design+Studio+1502,+15th+Floor+Galleria+Towers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d18db2effffff:0xc1795ad7524cb488?sa=X&ved=2ahUKEwj_08-9sdWBAxXKilYBHYbMB6oQ9Rd6BAg3EAA&ved=2ahUKEwj_08-9sdWBAxXKilYBHYbMB6oQ9Rd6BAhCEAU",
    },
    telephone: {
      name: "(+91) 8707 5593 69",
      tel: "tel:+918707559369",
    },
    email: {
      name: "acb@example.com",
      mail: "mailto:acb@example.com",
    },
  },
  pages: {
    Home: {
      title: "Empowering Wellness & Connection",
      description:
        "Transforming lives through innovative web design and holistic wellness programs. Let's work together to create a brighter future.",
      link1: HomeLink1,
      link2: HomeLink2,
      heroImage: homeImages
    },
  },
};
