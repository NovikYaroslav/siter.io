import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAnimation } from '../../context/AnimationContext';
import './canvas.css';
import picture from '../../img/picture.png';

export default function Canvas() {
  const location = useLocation();
  const preview = location.pathname === '/preview';
  const [animated, setAnimated] = useState(false);
  const { elements, selectElement, selectedElement } = useAnimation();
  const [x, setX] = useState(0);

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
        <div className='test' style={{ position: 'relative' }}>
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
      </div>
    </section>
  );
}
