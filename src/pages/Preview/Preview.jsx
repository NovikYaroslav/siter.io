import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PreviewCanvas from '../../components/Preview-canvas/Preview-canvas';
import './preview.css';

export default function Preview() {
  const [countdown, setCountdown] = useState(3);
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      setLaunched(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown !== 0) {
      const animationProperties = {
        scale: [0, 1],
        transition: {
          duration: 0.5,
        },
      };

      const animationControls = {
        scale: 1,
      };

      setMotionControls(animationControls);
      const resetAnimationTimeout = setTimeout(() => {
        setMotionControls(null);
      }, 700);
      return () => clearTimeout(resetAnimationTimeout);
    }
  }, [countdown]);

  const [motionControls, setMotionControls] = useState(null);

  return (
    <section className='preview'>
      <motion.p
        // initial={{
        //   scale: 0,
        // }}
        // animate={motionControls}
        className='preview__countdown'
        style={{ display: countdown === 0 ? 'none' : 'block' }}
      >
        {countdown}
      </motion.p>
      <PreviewCanvas launched={launched} />
    </section>
  );
}
