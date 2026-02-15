'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const servings = [
   {
      title: 'SANCKS',
      tag: 'Tasty & crispy',
      image: '/servings/img3.jpg'
   },
   {
      title: 'HEALTH BARS',
      tag: 'A quick healthy bite',
      image: '/servings/img5.jpg'
   },
   {
      title: 'SOFT DRINKS',
      tag: 'Cold beverages',
      image: '/servings/img1.jpg'
   },
   {
      title: 'Chocolates',
      tag: 'Mouth melting',
      image: '/servings/img2.jpg'
   },
   {
      title: 'FRUIT JUICE',
      tag: 'Healthy juices',
      image: '/servings/img4.jpg'
   }
];

export default function Servings() {
   return (
      <section
         id="products-section"
         className="min-h-[60vh] md:min-h-[90vh] rounded-sm flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden py-[6vh] md:py-0"
      >
         <div className="flex flex-col justify-center mb-[3vh]">
            <h2 className="text-[16px] md:text-[3vw] lg:text-[2vw] xl:text-[26px] text-primary text-center font-medium">
               Delightful servings, all day, everyday!!
            </h2>
         </div>

         <InfiniteMovingCards items={servings} direction="right" speed="slow" />
      </section>
   );
}
