'use client';

import { cn } from '@/lib/utils';
import {
   AnimatePresence,
   motion,
   useMotionValueEvent,
   useScroll
} from 'motion/react';
import { useState } from 'react';

export const FloatingNav = ({
   children,
   className
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   const { scrollYProgress } = useScroll();

   const [visible, setVisible] = useState(true);

   useMotionValueEvent(scrollYProgress, 'change', (current) => {
      // Check if current is not undefined and is a number
      if (typeof current === 'number') {
         const direction = current - scrollYProgress.getPrevious()!;

         if (scrollYProgress.get() < 0) {
            setVisible(false);
         } else {
            if (direction < 0) {
               setVisible(true);
            } else {
               setVisible(false);
            }
         }
      }
   });

   return (
      <AnimatePresence mode="wait">
         <motion.div
            initial={{
               opacity: 1,
               y: -100
            }}
            animate={{
               y: visible ? 0 : -100,
               opacity: visible ? 1 : 0
            }}
            transition={{
               duration: 0.2,
               ease: 'easeInOut'
            }}
            className={cn(
               'flex max-w-fit fixed top-4 mx-auto rounded-full z-100 lg:pr-2 pl-8 lg:py-2  items-center justify-center space-x-4',
               className
            )}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
};
