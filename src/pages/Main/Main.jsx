import { motion } from 'framer-motion';
import Canvas from '../../components/Canvas/Canvas';
import Panel from '../../components/Panel/Panel';
import './main.css';

export default function Main() {
  return (
    <main className='main'>
      <div className='main__canvas-area'>
        <Canvas />
      </div>
      <Panel />
    </main>
  );
}
