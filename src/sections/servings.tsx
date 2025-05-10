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
      <section className="h-[40rem] rounded-sm flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
         <div className="flex flex-col justify-center font-sans text-2xl text-red-500">
            Delightful servings, all day,everyday!!
         </div>

         <InfiniteMovingCards items={servings} direction="right" speed="slow" />
      </section>
   );
}
