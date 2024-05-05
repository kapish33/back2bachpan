import { assets } from '@/assets';
import { HomeLink1, HomeLink2 } from './AppStringHelper/Home';
import { FooterData } from './AppStringHelper/Shared/Footer';
import { homeImages } from './AppStringHelper/imagePropsFormer';
import { showcaseData, showcaseArray } from './AppStringHelper/ShowCase';
import { Hero as FallPreventionHero } from './AppStringHelper/FallPreventionPrograms';
import { Hero as FlightToHappinessHero } from './AppStringHelper/FlightToHappiness';
import { Hero as HappyHeartCenterHero } from './AppStringHelper/HappyHeartCenter';
import { Hero as MeraSathiHelplineHero } from './AppStringHelper/MeraSathiHelpline';
import { Hero as SecondInningsWellnessProgramsHero } from './AppStringHelper/SecondInningsWellnessPrograms';
import {
  AboutCommunitySpeak,
  AboutImpact,
  AboutIntro,
  AboutWhyBackToBachpan,
} from './AppStringHelper/AboutUs';

export const appStringMap = {
  shared: {
    footer: FooterData,
  },
  pages: {
    Home: {
      homeIcon: assets.homeIcon,
      title: 'Empowering Wellness & Connection',
      description:
        "Transforming lives through innovative web design and holistic wellness programs. Let's work together to create a brighter future.",
      link1: HomeLink1,
      link2: HomeLink2,
      heroImage: homeImages,
      showcase: {
        showcaseData,
        showcaseArray,
      },
    },
    HappyHeartCenter: {
      hero: HappyHeartCenterHero,
    },
    SecondInningsWellnessPrograms: {
      hero: SecondInningsWellnessProgramsHero,
    },
    FlightToHappiness: {
      hero: FlightToHappinessHero,
    },
    MeraSathiHelpline: {
      hero: MeraSathiHelplineHero,
    },
    FallPreventionPrograms: {
      hero: FallPreventionHero,
    },
    aboutUsPage: {
      intro: AboutIntro,
      impact: AboutImpact,
      communitySpeak: AboutCommunitySpeak,
      whyBackToBackpan: AboutWhyBackToBachpan,
    },
  },
};
