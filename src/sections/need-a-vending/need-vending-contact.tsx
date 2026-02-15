'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NeedVendingContact() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      company: '',
      location: '',
      employees: '',
      message: ''
   });

   useGSAP(() => {
      if (!contentRef.current) return;
      gsap.from(contentRef.current.children, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         stagger: 0.1,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
         }
      });
   }, []);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
   ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Vending machine request:', formData);
   };

   return (
      <section
         id="vending-contact-section"
         ref={sectionRef}
         className="relative w-full py-[6vh] md:py-[10vh] overflow-hidden"
      >
         <div
            ref={contentRef}
            className="relative z-10 max-w-[1400px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px]"
         >
            <div className="flex flex-col lg:flex-row gap-[4vw] md:gap-[6vw]">
               {/* Left side — info */}
               <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <span className="text-primary text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase mb-[1vh]">
                     Get Started
                  </span>
                  <h2 className="text-[24px] md:text-[4vw] lg:text-[3vw] xl:text-[38px] font-bold text-text-secondary mb-[2vh]">
                     Request a{' '}
                     <span className="text-primary">Vending Machine</span>
                  </h2>
                  <p className="text-[14px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] text-text-secondary mb-[4vh] leading-relaxed">
                     Fill in your details and our team will get back to you within
                     24 hours with a customised vending solution for your space.
                  </p>

                  <div className="space-y-[16px] md:space-y-[2vh]">
                     <div className="flex items-start gap-[10px] md:gap-[1vw]">
                        <svg
                           className="w-[18px] h-[18px] md:w-[1.5vw] md:h-[1.5vw] text-primary mt-[2px] shrink-0"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                           />
                        </svg>
                        <div>
                           <p className="text-[13px] md:text-[1.4vw] lg:text-[1vw] xl:text-[14px] text-text-secondary">
                              +91 99802 20000
                           </p>
                           <p className="text-[13px] md:text-[1.4vw] lg:text-[1vw] xl:text-[14px] text-text-secondary">
                              +91 99805 52200
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-[10px] md:gap-[1vw]">
                        <svg
                           className="w-[18px] h-[18px] md:w-[1.5vw] md:h-[1.5vw] text-primary mt-[2px] shrink-0"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                           />
                        </svg>
                        <p className="text-[13px] md:text-[1.4vw] lg:text-[1vw] xl:text-[14px] text-text-secondary">
                           info@snackit.in
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right side — form */}
               <div className="w-full lg:w-[60%]">
                  <form onSubmit={handleSubmit}>
                     <div className="space-y-[16px] md:space-y-[2vh]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[2vw]">
                           <input
                              required
                              type="text"
                              name="name"
                              placeholder="Your name *"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                           />
                           <input
                              required
                              type="email"
                              name="email"
                              placeholder="Work email *"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                           />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[2vw]">
                           <input
                              required
                              type="tel"
                              name="mobile"
                              placeholder="Phone number *"
                              value={formData.mobile}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                           />
                           <input
                              type="text"
                              name="company"
                              placeholder="Company name"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                           />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[2vw]">
                           <input
                              type="text"
                              name="location"
                              placeholder="City / Location"
                              value={formData.location}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                           />
                           <select
                              name="employees"
                              value={formData.employees}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                           >
                              <option value="">Team size</option>
                              <option value="1-50">1–50 employees</option>
                              <option value="51-200">51–200 employees</option>
                              <option value="201-500">201–500 employees</option>
                              <option value="500+">500+ employees</option>
                           </select>
                        </div>

                        <textarea
                           name="message"
                           placeholder="Tell us about your requirements (optional)"
                           value={formData.message}
                           onChange={handleChange}
                           rows={4}
                           className="w-full bg-transparent border border-black rounded-md p-[10px] md:p-[1.5vh] text-[14px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                        ></textarea>

                        <div className="flex justify-end gap-[12px] md:gap-[2vw]">
                        
                           <button
                              type="submit"
                              className="px-[20px] md:px-[2.5vw] xl:px-[32px] py-[10px] md:py-[1.2vh] xl:py-[12px] text-[13px] md:text-[1.4vw] lg:text-[1vw] xl:text-[14px] from-primary-dark to-primary bg-gradient-to-r text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,0,11,0.3)] cursor-pointer"
                           >
                              Request a Machine
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
