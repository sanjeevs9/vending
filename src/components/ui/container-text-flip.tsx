'use client';

import React, { useEffect, useId, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export interface ContainerTextFlipProps {
   /** Array of words to cycle through in the animation */
   words?: string[];
   /** Time in milliseconds between word transitions */
   interval?: number;
   /** Additional CSS classes to apply to the container */
   className?: string;
   /** Additional CSS classes to apply to the text */
   textClassName?: string;
   /** Duration of the transition animation in milliseconds */
   animationDuration?: number;
}

export function ContainerTextFlip({
   words = ['better', 'modern', 'beautiful', 'awesome'],
   interval = 3000,
   className,
   textClassName,
   animationDuration = 700
}: ContainerTextFlipProps) {
   const id = useId();
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [width, setWidth] = useState(100);
   const textRef = React.useRef(null);

   const updateWidthForWord = () => {
      if (textRef.current) {
         // Add some padding to the text width (30px on each side)
         // @ts-expect-error - scrollWidth is available on HTML elements
         const textWidth = textRef.current.scrollWidth + 30;
         setWidth(textWidth);
      }
   };

   useEffect(() => {
      // Update width whenever the word changes
      updateWidthForWord();
   }, [currentWordIndex]);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
         // Width will be updated in the effect that depends on currentWordIndex
      }, interval);

      return () => clearInterval(intervalId);
   }, [words, interval]);

   return (
      <motion.div
         layoutId={`words-here-${id}`}
         animate={{ width }}
         transition={{ duration: animationDuration / 2000 }}
         className={cn(
            'relative inline-block rounded-lg pt-[1vh] pb-[1.5vh] text-center font-bold text-[#E7000B]',
            'text-[8vw] md:text-[6vw] lg:text-[5vw]', // Responsive text sizing
            className
         )}
         key={words[currentWordIndex]}
      >
         <motion.div
            transition={{
               duration: animationDuration / 1000,
               ease: 'easeInOut'
            }}
            className={cn('inline-block', textClassName)}
            ref={textRef}
            layoutId={`word-div-${words[currentWordIndex]}-${id}`}
         >
            <motion.div className="inline-block">
               {words[currentWordIndex].split('').map((letter, index) => (
                  <motion.span
                     key={index}
                     initial={{
                        opacity: 0,
                        filter: 'blur(10px)',
                        scale: 0.8
                     }}
                     animate={{
                        opacity: 1,
                        filter: 'blur(0px)',
                        scale: 1
                     }}
                     transition={{
                        delay: index * 0.02,
                        duration: 0.3
                     }}
                  >
                     {letter}
                  </motion.span>
               ))}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
