import { assets } from '@/assets';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { appStringMap } from '@appString/appStringMap';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const {
    pages: {
      aboutUsPage: { intro, impact, communitySpeak, whyBackToBackpan },
    },
  } = appStringMap;
  return (
    <>
      <div className='py-20'>
        {/* Introduction Start */}
        <section className='Introduction'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap items-center justify-center'>
              <div className='w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0'>
                <Image
                  src={intro.aboutImage.url}
                  alt={intro.aboutImage.altText}
                  className='rounded-lg shadow-md'
                />
              </div>
              <div className='w-full md:w-1/2 lg:w-2/3 md:pl-12'>
                <h2 className='text-4xl font-bold mb-4 '>{intro.h1}</h2>
                <p className='text-lg mb-6 opacity-70'>{intro.p1}</p>
                <p className='text-lg opacity-70 pb-4'>{intro.p2}</p>
                <Link
                  className={cn(buttonVariants({ variant: 'default' }))}
                  href={intro.button.href}>
                  {intro.button.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Introduction End */}

        {/* Impact Start */}
        <section className='Impact md:py-12 py-8'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6 '>{impact.Heroh2}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {impact.impactArray.map((impact,key) => {
                return (
                  <div key={key} className='bg-gray-100 rounded-lg p-6'>
                    <h3 className='text-xl text-black font-semibold mb-4'>
                      {impact.h3}
                    </h3>
                    <p className='text-gray-900 mb-4'>{impact.p}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Impact End */}

        {/* CommunitySpeak Start */}

        <section className='CommunitySpeak md:py-12 py-8'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6 '>
              {communitySpeak.heroHeading}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {communitySpeak.speaksArray.map((speaker,key) => (
                <div
                  key={key}
                  className='dark:bg-white bg-gray-100 rounded-lg p-6'>
                  <blockquote className='text-gray-700 italic'>
                    {speaker.blockquote}
                  </blockquote>
                  <p className='mt-4 text-gray-800'>{speaker.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CommunitySpeak Ends */}

        {/* WhyBackToBachpan Start */}
        <section className=' md:py-12 py-8'>
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-6 '>
              {whyBackToBackpan.heading}
            </h2>
            <p className='opacity-70 mb-6'>{whyBackToBackpan.para}</p>
          </div>
        </section>
        {/* WhyBackToBachpan Ends */}
      </div>
    </>
  );
}
