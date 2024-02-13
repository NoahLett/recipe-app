'use client'

import React, {useEffect, useState} from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

const Carousel = ({ recipes }) => {

    const [imgIndex, setImgIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const dragX = useMotionValue(0);
    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) => {
        if (typeof latest === 'number' && dragging) {
            dragXProgress.set(latest);
        } else {
            dragXProgress.set(0);
        }
    })

    const DRAG_BUFFER = 50;
    const DELAY = 5000;
    const SPRING_OPTIONS = {
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragXProgress.get();
            if (x === 0) {
                setImgIndex(pv => {
                    if (pv === recipes.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                })
            }
        }, DELAY);
        return () => clearInterval(intervalRef);
    }, []);

    const onDragStart = () => {
        setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);

        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < recipes.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    }

  return (
    <div className='relative overflow-hidden min-h-[15rem] w-[99.99vw]'>
        <motion.div 
          className='flex items-center cursor-grab active:cursor-grabbing'
          drag='x'
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
            {
                recipes.map((recipe, i) => {
                    return (
                        <motion.div 
                          key={i}  
                          style={{
                            backgroundImage: `url(${recipe.image_src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            }}
                          className='aspect-video w-full shrink-0 rounded-sm bg-slate-100 object-cover'
                          animate={{
                            scale: '1',
                          }}
                          transition={SPRING_OPTIONS}
                        >
                            <div 
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                content: " ",
                                background: 'rgba(0, 0, 0, 0.35)', 
                                zIndex: -10,
                                borderRadius: '0.25rem',
                              }}
                            />
                            <div className='absolute top-[5%] md:top-[10%] left-[7%] max-w-[10rem] pb-2'>
                                <h3 className='text-white font-semibold text-5xl md:text-7xl lg:text-8xl'>{recipe.name}</h3>
                                <h4 className='text-white font-medium text-xl md:text-2xl lg:text-3xl italic mt-2 md:mt-10'>{recipe.genre}</h4>
                            </div>
                            <div className='absolute bottom-[9%] right-[5%]'>
                                <Link href={`/recipes/${recipe.id}`} className='text-black font-medium py-2 px-4 md:py-3 md:px-7 md:text-xl bg-slate-100 rounded-md shadow-lg'>View</Link>
                            </div>
                        </motion.div>
                    )
                })
            }
        </motion.div>
    </div>
  )
}

const Dots = ({ recipes, imgIndex, setImgIndex }) => {
    return (
        <div className='mt-4 flex w-full justify-center gap-2 absolute bottom-[1.75rem]'>
            {
                recipes.map((recipe, index) => {
                    return (
                        <button
                         key={index}
                         onClick={() => setImgIndex(index)}
                         className={`h-3 w-3 rounded-full transition-colors border ${
                            index === imgIndex ? 'bg-slate-50 border-slate-50' : 'bg-slate-200 border-slate-300'
                         }`}
                        />
                    )
                })
            }
        </div>
    )
}

export default Carousel