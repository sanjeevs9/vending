'use client';

import { useEffect, useRef, useState } from 'react';

interface Review {
   name: string;
   rating: number;
   date: string;
   text: string;
}

interface GoogleReviewsProps {
   reviews?: Review[];
   placeUrl?: string;
   overallRating?: number;
   totalReviews?: number;
}

const DEFAULT_REVIEWS: Review[] = [
   {
      name: 'Rahul Sharma',
      rating: 5,
      date: '2 months ago',
      text: 'Great vending machine service! The snacks are always fresh and the machine is well-maintained. Love the variety of healthy options available.'
   },
   {
      name: 'Priya Menon',
      rating: 5,
      date: '3 months ago',
      text: 'Snackit has been a fantastic addition to our office. The team loves the convenience and the selection keeps getting better. Highly recommend!'
   },
   {
      name: 'Arun Kumar',
      rating: 4,
      date: '4 months ago',
      text: 'Very reliable service. The machine rarely has issues and when it does, the support team is quick to respond. Good range of snacks and drinks.'
   },
   {
      name: 'Deepa Nair',
      rating: 5,
      date: '5 months ago',
      text: 'We installed Snackit in our co-working space and it has been a hit with members. Zero hassle from our end — they handle everything.'
   },
   {
      name: 'Vikram Patel',
      rating: 5,
      date: '6 months ago',
      text: 'Professional team and excellent service. The payment options are very convenient — UPI works flawlessly. Our employees are happy!'
   },
   {
      name: 'Sneha Reddy',
      rating: 4,
      date: '7 months ago',
      text: 'Good experience overall. The machine is sleek and modern. Would love to see more juice options but the current selection is solid.'
   }
];

const DEFAULT_PLACE_URL =
   'https://www.google.com/maps/place/Snackit.in/@12.8925906,77.6336434,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15056db4db2d:0x243f0710a86e1c26!8m2!3d12.8925906!4d77.6362183!16s%2Fg%2F11bt_j3r14';

function StarRating({ rating }: { rating: number }) {
   return (
      <div className="flex gap-[2px]">
         {Array.from({ length: 5 }).map((_, i) => (
            <svg
               key={i}
               className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] ${
                  i < rating ? 'text-[#FBBC05]' : 'text-[#dadce0]'
               }`}
               viewBox="0 0 24 24"
               fill="currentColor"
            >
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
         ))}
      </div>
   );
}

function ReviewerAvatar({ name }: { name: string }) {
   const initial = name.charAt(0).toUpperCase();
   const colors = [
      'bg-[#4285F4]',
      'bg-[#EA4335]',
      'bg-[#34A853]',
      'bg-[#FBBC05]',
      'bg-[#8E24AA]',
      'bg-[#00897B]'
   ];
   const colorIndex =
      name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) %
      colors.length;

   return (
      <div
         className={`${colors[colorIndex]} w-[32px] h-[32px] md:w-[36px] md:h-[36px] rounded-full flex items-center justify-center flex-shrink-0`}
      >
         <span className="text-white text-[13px] md:text-[14px] font-medium">
            {initial}
         </span>
      </div>
   );
}

export default function GoogleReviews({
   reviews = DEFAULT_REVIEWS,
   placeUrl = DEFAULT_PLACE_URL,
   overallRating = 4.6,
   totalReviews = 120
}: GoogleReviewsProps) {
   const sectionRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         { threshold: 0.1 }
      );

      const el = sectionRef.current;
      if (el) observer.observe(el);
      return () => {
         if (el) observer.unobserve(el);
      };
   }, []);

   return (
      <section
         ref={sectionRef}
         className="relative w-full py-[6vh] md:py-[8vh] overflow-hidden"
      >
         <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-[4vh] md:mb-[5vh] gap-[2vh]">
               <div>
                  <div className="flex items-center gap-[8px] mb-[1.5vh]">
                     <svg
                        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                           fill="#4285F4"
                        />
                        <path
                           d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                           fill="#34A853"
                        />
                        <path
                           d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                           fill="#FBBC05"
                        />
                        <path
                           d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                           fill="#EA4335"
                        />
                     </svg>
                     <span className="text-[12px] md:text-[14px] text-[#1a1a1a]/50 font-medium tracking-wide uppercase">
                        Google Reviews
                     </span>
                  </div>
                  <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a]">
                     See What Our Clients Say
                  </h2>

                  {/* Overall rating */}
                  <div className="flex items-center gap-[10px] mt-[1.5vh]">
                     <span className="text-[28px] md:text-[32px] font-bold text-[#1a1a1a]">
                        {overallRating}
                     </span>
                     <div>
                        <StarRating rating={Math.round(overallRating)} />
                        <span className="text-[11px] md:text-[13px] text-[#1a1a1a]/40 mt-[2px] block">
                           {totalReviews} reviews
                        </span>
                     </div>
                  </div>
               </div>

               {/* <a
                  href={placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] text-[13px] md:text-[15px] text-primary font-medium hover:underline underline-offset-4 transition-colors"
               >
                  View all reviews on Google
                  <svg
                     className="w-[14px] h-[14px]"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
               </a> */}
            </div>

            {/* Reviews grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px]">
               {reviews.map((review, idx) => (
                  <div
                     key={idx}
                     className="bg-white border border-[#1a1a1a]/8 rounded-xl p-[16px] md:p-[20px] transition-shadow duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                     style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                           ? 'translateY(0)'
                           : 'translateY(20px)',
                        transition: `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s ease ${idx * 0.1}s`
                     }}
                  >
                     {/* Reviewer info */}
                     <div className="flex items-center gap-[10px] mb-[12px]">
                        <ReviewerAvatar name={review.name} />
                        <div>
                           <p className="text-[13px] md:text-[14px] font-medium text-[#1a1a1a]">
                              {review.name}
                           </p>
                           <p className="text-[11px] md:text-[12px] text-[#1a1a1a]/40">
                              {review.date}
                           </p>
                        </div>
                     </div>

                     {/* Stars */}
                     <div className="mb-[10px]">
                        <StarRating rating={review.rating} />
                     </div>

                     {/* Review text */}
                     <p className="text-[13px] md:text-[14px] text-[#1a1a1a]/70 leading-relaxed line-clamp-4">
                        {review.text}
                     </p>
                  </div>
               ))}
            </div>

            {/* Footer link */}
            <div className="flex justify-center mt-[4vh]">
               <a
                  href={placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] bg-white border border-[#1a1a1a]/10 rounded-full px-[20px] md:px-[24px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] text-[#1a1a1a]/70 hover:border-primary hover:text-primary transition-all duration-300"
               >
                  <svg
                     className="w-[16px] h-[16px]"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                     />
                     <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                     />
                     <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                     />
                     <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                     />
                  </svg>
                  Read more reviews on Google
               </a>
            </div>
         </div>
      </section>
   );
}
