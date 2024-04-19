// import { siteRoutes } from '../../../utils/sitePaths';
// const { landingPagesNav } = siteRoutes;

export const headerRoutes = {
  homePage: {
    path: "landingPagesNav.home",
    name: 'Logo',
  },
  mobile: [
    {
      path: "landingPagesNav.Products",
      css: 'anchor_nonunderline_mobile',
      name: 'Products',
    },
    {
      path: "landingPagesNav.Pricing",
      css: 'anchor_nonunderline_mobile',
      name: 'Pricing',
    },
    {
      path: "landingPagesNav.Resources",
      css: 'anchor_nonunderline_mobile',
      name: 'Resources',
    },
    // {
    //   path: landingPagesNav.Login,
    //   css: 'anchor_nonunderline_mobile',
    //   name: 'Login',
    // },
    {
      path: "landingPagesNav.Contact",
      css: 'anchor_button_mobile',
      name: 'Contact Us',
    },
  ],
  pc: [
    {
      path: "landingPagesNav.Products",
      css: 'anchor_pc',
      name: 'Products',
    },
    {
      path: "landingPagesNav.Pricing",
      css: 'anchor_pc',
      name: 'Pricing',
    },
    {
      path: "landingPagesNav.Resources",
      css: 'anchor_pc',
      name: 'Resources',
    },
    // {
    //   path: landingPagesNav.Resources,
    //   css: 'anchor_pc',
    //   name: 'Login',
    // },
    {
      path: "landingPagesNav.Contact",
      css: 'anchor_pc_button',
      name: 'Contact Us',
    },
  ],
};