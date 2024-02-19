import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../../context/AnimationContext';
import { ValueExtractor } from '../../utils/formating-functions';
import './canvas.css';
import picture from '../../img/picture.png';

export default function Canvas() {
  const [animated, setAnimated] = useState(false);
  const { elements, selectElement, selectedElement } = useAnimation();
  const [x, setX] = useState(0);

  console.log(elements);
  console.log(ValueExtractor(elements, selectedElement, 'opacity'));

  function handleElementSelection(evt) {
    selectElement(evt.target.id);
  }

  function handleXrise() {
    setX(x + 10);
  }

  return (
    <section className='canvas'>
      <div className='canvas__container-left '>
        <div
          className={
            selectedElement === 'title' ? 'canvas__selected_top' : null
          }
        >
          <div
            className={
              selectedElement === 'title' ? 'canvas__selected_bottom' : null
            }
          >
            <motion.h1
              // initial={{
              //   x: 8,
              //   y: -10,
              //   opacity: 1,
              //   scale: 1,
              // }}
              // animate={
              //   animated
              //     ? {
              //         x: 0,
              //         y: -10,
              //         opacity: 1,
              //         scale: 1,
              // transition: {
              //   duration: 3,
              //   delay: 0.2,
              //   ease: 'easeInOut',
              // },
              // }
              // : {}
              // }
              className='canvas__title'
              id='title'
              onClick={(evt) => handleElementSelection(evt)}
            >
              Animation Settings
            </motion.h1>
          </div>
        </div>

        <div
          className={selectedElement === 'text' ? 'canvas__selected_top' : null}
        >
          <div
            className={
              selectedElement === 'text' ? 'canvas__selected_bottom' : null
            }
          >
            <p
              className='canvas__text'
              id='text'
              onClick={(evt) => handleElementSelection(evt)}
            >
              The user should have the option to select any element on the page
              and set up its animation using the controls in the right panel. A
              dotted line will show the element's position and state before the
              animation begins, giving the user a clear idea of how the
              animation will appear. The preview button on the top panel will
              open the result in a new tab.
            </p>
          </div>
        </div>

        <div
          className='canvas__button-container'
          style={{
            position: 'relative',
          }}
        >
          <motion.button
            className='canvas__button'
            onClick={(evt) => {
              handleXrise();
              handleElementSelection(evt);
            }}
            id='button'
          >
            Button
          </motion.button>
          {selectedElement === 'button' ? (
            <div className='canvas__shadow'>
              <motion.button
                animate={{
                  x: ValueExtractor(elements, 'button', 'x'),
                  y: ValueExtractor(elements, 'button', 'y'),
                  opacity: `${Number(
                    ValueExtractor(elements, 'button', 'opacity')
                  )}%`,
                  scale: ValueExtractor(elements, 'button', 'scale'),
                  filter: `blur(${ValueExtractor(
                    elements,
                    'button',
                    'blur'
                  )}px)`,
                }}
                className='canvas__button canvas__shadow'
                id='button'
              >
                Button
              </motion.button>
            </div>
          ) : null}
        </div>
      </div>

      <div className='canvas__container-right'>
        <div
          className={
            selectedElement === 'picture'
              ? 'canvas__selected_top canvas__picture'
              : null
          }
        >
          <div
            className={
              selectedElement === 'picture' ? 'canvas__selected_bottom' : null
            }
          >
            <img
              className='canvas__picture'
              src={picture}
              alt='test picture'
              id='picture'
              onClick={(evt) => handleElementSelection(evt)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
