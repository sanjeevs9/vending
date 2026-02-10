/* eslint-disable @next/next/no-img-element */
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

            <div className="px-3 pb-6">
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
