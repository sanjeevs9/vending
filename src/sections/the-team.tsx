/* eslint-disable @next/next/no-img-element */
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SVGProps } from 'react';

const member1 = {
   name: 'Ashish Kumar Nimaodia',
   nickName: 'The Snack Tech Sorcerer',
   about: `Ashish is the one who made it all happen. With his expertise in tech and his love for snacks`,
   backgroundImage: '/team/2b.jpg',
   foregroundImage: '/team/2f.png'
};
const member2 = {
   name: 'Monika Nimaodia',
   nickName: 'Snack Whisperer & Creative Genius',
   about: 'Monika always believed snacks were more than just fuel – they were an experience. With a passion for perfecting snack moments',
   backgroundImage: '/team/1b.jpg',
   foregroundImage: '/team/1f.png'
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TheTeam() {
   useGSAP(() => {
      gsap.set('.team-card-2', { y: -150, opacity: 0 });
      gsap.to('.team-card-2', {
         y: 50,
         opacity: 1,
         duration: 0.5,
         scrollTrigger: {
            trigger: '.team-card-1',
            start: 'top bottom',
            end: '+=500',
            scrub: true
            // markers: true,
         },
         ease: 'power2.in'
      });
   }, []);

   return (
      <section className="team-section relative min-h-[110vh] overflow-hidden flex flex-col items-center justify-center">
         {/* background img  */}
         <img
            src="/team/background.jpg"
            alt="Background"
            className="absolute inset-0 w-full min-h-[110vh] object-cover z-0 object-center"
            draggable={false}
         />

         {/* dimm effect  */}
         <div className="bg-slate-700/40 z-1 absolute w-full h-full" />

         {/* content  */}
         <div className="team-cards relative z-10 flex flex-col items-center justify-start">
            <h1 className="font-bowlby  text-2xl md:text-6xl text-white pb-5">
               Our Team, The Snack Gurus
            </h1>

            <TeamMemberCard
               member={member1}
               className="team-card team-card-1 w-full max-w-xl mb-0"
            />
            <TeamMemberCard
               member={member2}
               className="team-card team-card-2 w-full max-w-xl -mt-10"
            />
         </div>
      </section>
   );
}

function TeamMemberCard({
   member,
   className
}: Readonly<{
   className?: string;
   member: {
      name: string;
      nickName: string;
      about: string;
      backgroundImage: string;
      foregroundImage: string;
   };
}>) {
   return (
      <div
         className={`${
            className ?? ''
         } rounded-3xl overflow-hidden transition-all duration-700 w-[550] z-10 
            `}
         // backdrop-blur-md
         //    `}
         style={{
            background: 'rgba(60, 60, 60, 0.85)',
            backdropFilter: 'blur(6px)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
         }}
      >
         <div className="flex items-center gap-3">
            <div className="skater group relative flex flex-col items-center gap-4 h-70 w-55">
               <div className="stack-layout overflow-hidden">
                  <img
                     src={member.backgroundImage}
                     alt=""
                     className="h-70 scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
                  />
                  {/* <SkaterScribble className={clsx('relative text-red-600/50 h-70')} /> */}
                  <img
                     src={member.foregroundImage}
                     alt=""
                     className="h-70 transform transition-transform duration-1000 ease-in-out group-hover:scale-110 z-30"
                  />
                  <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
               </div>
            </div>

            <div className="px-3 pb-6 font-inter">
               <h3 className="text-white text-2xl font-bold mb-1">
                  {member.name}
               </h3>
               <p className="text-gray-300 font-medium mb-4">
                  {member.nickName}
               </p>
               <p className="text-gray-400 text-sm h-full w-60">
                  {member.about}
               </p>
            </div>
         </div>
      </div>
   );
}

function SkaterScribble(props: SVGProps<SVGSVGElement>) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 231 312"
         {...props}
      >
         <path
            className="skater-scribble-path animate-squiggle"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="9"
            d="m12 150-2-32 2-27c2-16 14-36 18-52 4-38 47-25 77-23 19 1 38-6 56-4 9 1 17 7 25 13 6 6 14 11 16 20 3 11-4 26-3 38 2 12 7 21 7 33 2 28 2 55 2 83l-2 28c0 15 1 25-10 37-17 16-34 29-59 32-23 4-47 7-70 3-13-2-19-9-26-20-8-14-17-30-21-46-2-10-1-19 0-29l2-62c0-21 3-40 13-59 7-14 9-29 21-39 6-6 20-2 27-5 10-4 20 0 30 0 9-1 32-8 39-5 14 6 16 15 24 28 5 9-2 23 0 32 3 16 8 30 9 47 1 18-2 36-4 54-1 8 0 15-2 23l-8 12-10 14c-4 5-9 9-14 12l-18 9c-7 4-16 5-24 6-6 2-12 1-18 1-4-1-5-4-8-6l-9-10-12-17a65 65 0 0 1-11-32v-20l5-18c1-10-2-23 0-32 3-13 4-25 8-38 4-9 11-19 19-26 7-7 22-10 32-11 6 0 14 1 18 4 5 4 15 10 18 15 4 6 0 15 2 22l6 42-3 21c-1 10-4 18-8 27-5 12-11 27-24 31-8 3-19 5-28 2-10-5-13-20-14-30-1-7 0-14 1-21 4-17 0-44 8-61 5-8 23-9 28-8 6 0 12 6 14 12 3 6-3 16-3 23l-1 17c-1 9-2 19-6 27-2 5-6 10-10 14-6 7-8 4-10-5s1-19 3-28c1-9 4-18 7-26"
         ></path>
      </svg>
   );
}
