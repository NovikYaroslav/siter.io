import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../../context/AnimationContext';
import { ValueExtractor } from '../../utils/formating-functions';
import './canvas.css';
import picture from '../../img/picture.png';

export default function PreviewCanvas({ launched }) {
  const { elements } = useAnimation();

  return (
    <motion.section className='canvas'>
      {launched ? (
        <>
          <div className='canvas__container-left '>
            <motion.h1
              initial={{
                x: ValueExtractor(elements, 'title', 'x'),
                y: ValueExtractor(elements, 'title', 'y'),
                opacity: ValueExtractor(elements, 'title', 'opacity'),
                scale: ValueExtractor(elements, 'title', 'scale'),
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: ValueExtractor(elements, 'title', 'speed'),
                delay: ValueExtractor(elements, 'title', 'delay'),
                ease: ValueExtractor(elements, 'title', 'easing'),
                repeat: ValueExtractor(elements, 'title', 'replay')
                  ? Infinity
                  : undefined,
              }}
              className='canvas__title'
              id='title'
            >
              Animation Settings
            </motion.h1>

            <motion.p
              initial={{
                x: ValueExtractor(elements, 'text', 'x'),
                y: ValueExtractor(elements, 'text', 'y'),
                opacity: ValueExtractor(elements, 'text', 'opacity'),
                scale: ValueExtractor(elements, 'text', 'scale'),
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: ValueExtractor(elements, 'text', 'speed'),
                delay: ValueExtractor(elements, 'text', 'delay'),
                ease: ValueExtractor(elements, 'text', 'easing'),
                repeat: ValueExtractor(elements, 'text', 'replay')
                  ? Infinity
                  : undefined,
              }}
              className='canvas__text'
              id='text'
            >
              The user should have the option to select any element on the page
              and set up its animation using the controls in the right panel. A
              dotted line will show the element's position and state before the
              animation begins, giving the user a clear idea of how the
              animation will appear. The preview button on the top panel will
              open the result in a new tab.
            </motion.p>

            <motion.button
              initial={{
                x: ValueExtractor(elements, 'button', 'x'),
                y: ValueExtractor(elements, 'button', 'y'),
                opacity: ValueExtractor(elements, 'button', 'opacity'),
                scale: ValueExtractor(elements, 'button', 'scale'),
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: ValueExtractor(elements, 'button', 'speed'),
                delay: ValueExtractor(elements, 'button', 'delay'),
                ease: ValueExtractor(elements, 'button', 'easing'),
                repeat: ValueExtractor(elements, 'button', 'replay')
                  ? Infinity
                  : undefined,
              }}
              className='canvas__button'
              id='button'
            >
              Button
            </motion.button>
          </div>

          <motion.img
            initial={{
              x: ValueExtractor(elements, 'picture', 'x'),
              y: ValueExtractor(elements, 'picture', 'y'),
              opacity: ValueExtractor(elements, 'picture', 'opacity'),
              scale: ValueExtractor(elements, 'picture', 'scale'),
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: ValueExtractor(elements, 'picture', 'speed'),
              delay: ValueExtractor(elements, 'picture', 'delay'),
              // ease: ValueExtractor(elements, 'picture', 'easing'),
              repeat: ValueExtractor(elements, 'picture', 'replay')
                ? Infinity
                : undefined,
            }}
            className='canvas__picture'
            src={picture}
            alt='test picture'
            id='picture'
          />
        </>
      ) : null}
    </motion.section>
  );
}
