import Image from 'next/image';

const topRow = [
   {
      src: '/featuredby/img3.png',
      alt: 'BW Disrupt',
      link: 'https://www.bwdisrupt.com/article/we-are-associated-with-45-plus-corporates-and-looking-forward-for-growth-of-40-by-june-2017-says-ashish-nimodia-founder-snackit-106775'
   },
   {
      src: '/featuredby/img1.png',
      alt: 'YourStory',
      link: 'https://yourstory.com/2017/07/snackit-startup-snack-healthy-munchies-vending-machines'
   },
   {
      src: '/featuredby/img2.png',
      alt: 'The Hindu',
      link: 'https://www.thehindu.com/life-and-style/food/a-snack-vending-machine-in-bengaluru/article20443929.ece'
   }
];

const bottomRow = [
   {
      src: '/featuredby/img5.png',
      alt: 'Dailyhunt',
      link: 'https://snackit.in',
      large: true
   },
   {
      src: '/featuredby/img4.png',
      alt: 'Restaurant India',
      link: 'https://www.indianretailer.com/restaurant/article/how-this-start-up-is-changing-the-snacking-system-at-offices.9797'
   }
];

export default function MediaAndUs() {
   return (
      <section className="relative w-full bg-white py-[10vh] md:py-[14vh]">
         <div className="max-w-[1700px] mx-auto px-[3vw] md:px-[4vw] xl:px-[56px]">
            {/* Title */}
            <div className="flex flex-col items-center text-center">
               <h2 className="text-[#1a1a1a] text-[24px] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[36px] font-semibold leading-tight tracking-[-0.01em]">
                  Media and{' '}
                  <span className="text-primary underline underline-offset-[6px] decoration-[2px]">
                     Us
                  </span>
               </h2>

               {/* Divider */}
               <div className="w-[32px] h-[2px] bg-[#1a1a1a]/15 mt-[20px] mb-[20px]" />

               {/* Description */}
               <p className="text-[#1a1a1a]/45 text-[14px] md:text-[1.8vw] lg:text-[1.15vw] xl:text-[17px] leading-[1.7] max-w-[780px]">
                  Good work never goes unnoticed and we have managed to garner
                  recognition along our way. We have been featured in multiple
                  platforms for the tremendous client experience we offer in
                  Vending Industry.
               </p>
            </div>

            {/* Logos — Row 1: 3 logos */}
            <div className="flex flex-wrap items-center justify-center gap-[40px] md:gap-[8vw] lg:gap-[10vw] xl:gap-[140px] mt-[8vh] md:mt-[10vh]">
               {topRow.map((logo, idx) => (
                  <a
                     key={idx}
                     href={logo.link}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={260}
                        height={90}
                        className="h-[48px] md:h-[68px] lg:h-[80px] xl:h-[90px] w-auto object-contain"
                     />
                  </a>
               ))}
            </div>

            {/* Logos — Row 2: 2 logos */}
            <div className="flex flex-wrap items-center justify-center gap-[40px] md:gap-[8vw] lg:gap-[10vw] xl:gap-[140px] mt-[32px] md:mt-[48px]">
               {bottomRow.map((logo, idx) => (
                  <a
                     key={idx}
                     href={logo.link}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.large ? 340 : 260}
                        height={logo.large ? 120 : 90}
                        className={`w-auto object-contain ${logo.large ? 'h-[64px] md:h-[88px] lg:h-[104px] xl:h-[120px]' : 'h-[48px] md:h-[68px] lg:h-[80px] xl:h-[90px]'}`}
                     />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
}
