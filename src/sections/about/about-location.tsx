'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutLocation() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      if (contentRef.current) {
         gsap.from(contentRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
         });
      }
   }, []);

   return (
      <section
         ref={sectionRef}
         className="w-full py-[6vh] md:py-[8vh] bg-[#f5f5f5]"
      >
         <div
            ref={contentRef}
            className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]"
         >
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[2vh] md:gap-[4vw] mb-[4vh] md:mb-[5vh]">
               <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight">
                  Find Us <span className="text-primary">Here</span>
               </h2>
               <div className="md:text-right">
                  <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] leading-relaxed">
                     Avyan Techserve Private Limited
                  </p>
                  <p className="text-[#1a1a1a]/40 text-[12px] md:text-[1.2vw] lg:text-[0.9vw] xl:text-[13px] leading-relaxed">
                     #2280, 16th Cross, 21st A Main Road
                     <br />
                     1st Sector, HSR Layout, Bengaluru 560102
                  </p>
               </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[#1a1a1a]/8">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.6336434!3d12.8925906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15056db4db2d%3A0x243f0710a86e1c26!2sSnackit.in!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] md:h-[400px]"
                  title="Snackit office location"
               />
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap gap-[20px] md:gap-[4vw] mt-[3vh] md:mt-[4vh]">
               <a
                  href="tel:+919980220000"
                  className="flex items-center gap-[8px] text-[#1a1a1a]/50 hover:text-primary text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] transition-colors"
               >
                  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +91 99802 20000
               </a>
               <a
                  href="mailto:info@snackit.in"
                  className="flex items-center gap-[8px] text-[#1a1a1a]/50 hover:text-primary text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] transition-colors"
               >
                  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@snackit.in
               </a>
               <a
                  href="https://www.google.com/maps/place/Snackit.in/@12.8925906,77.6336434,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[8px] text-[#1a1a1a]/50 hover:text-primary text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] transition-colors"
               >
                  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Open in Google Maps
               </a>
            </div>
         </div>
      </section>
   );
}
