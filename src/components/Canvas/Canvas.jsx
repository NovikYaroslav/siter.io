import { motion } from 'framer-motion';
import Selection from '../Selection/Selection';
import './canvas.css';
import picture from '../../img/picture.png';
import { useState } from 'react';

export default function Canvas() {
  const [animated, setAnimated] = useState(false);
  return (
    <div className='canvas'>
      <div className='canvas__container-left'>
        <motion.h1
          initial={{
            x: 160,
            y: 160,
            opacity: 0,
            scale: 1.5,
          }}
          animate={
            animated
              ? {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 3,
                    delay: 0.2,
                    ease: 'easeInOut',
                  },
                }
              : {}
          }
          className='canvas__title'
        >
          Animation Settings
        </motion.h1>
        <p className='canvas__text'>
          The user should have the option to select any element on the page and
          set up its animation using the controls in the right panel. A dotted
          line will show the element's position and state before the animation
          begins, giving the user a clear idea of how the animation will appear.
          The preview button on the top panel will open the result in a new tab.
        </p>
        <Selection>
          <button
            className='canvas__button'
            onClick={() => {
              setAnimated(!animated);
            }}
          >
            Button
          </button>
        </Selection>
      </div>
      <div className='canvas__container-right'>
        <img
          style={{ width: '300px', height: '300px', borderRadius: '3px' }}
          src={picture}
        />
      </div>
    </div>
  );
}
