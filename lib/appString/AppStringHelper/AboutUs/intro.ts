import { assets } from '@/assets';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Url } from 'next/dist/shared/lib/router/router';

interface AboutIntroSection {
  aboutImage: {
    url: StaticImport;
    altText: string;
  };
  h1: string;
  p1: string;
  p2: string;
  button: {
    href: Url;
    buttonText: string;
  };
}

export const AboutIntroSection: AboutIntroSection = {
  aboutImage: {
    url: assets.main.hero,
    altText: 'About Us Hero image',
  },
  h1: 'Back To Bachpan',
  p1: `"Back to Bachpan" is a collaborative social endeavor led by
    accomplished entrepreneurs, spiritual guides, alumni of
    prestigious institutions such as IITs and IIMs, and young
    individuals united by a shared mission. Our aim is to empower
    the elderly to lead lives that are richer in fulfilment and
    joy.`,
  p2: ` We organize a wide range of interactive sessions and
    activities regularly tailored to the diverse needs of older
    adults. These programs serve several functions: assisting in
    acquiring new skills, nurturing connections with similar
    individuals, promoting independence with a supportive
    community to rely on in times of need, and instilling a sense
    of purpose in their lives.`,
  button: {
    href: 'contact-us',
    buttonText: 'Learn More',
  },
};
