import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import { AnimationContextProvider } from '../../context/AnimationContext';
import Preview from '../../pages/Preview/Preview';

export default function App() {
  return (
    <>
      <Header />
      <AnimationContextProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/preview' element={<Preview />} />
        </Routes>
      </AnimationContextProvider>
    </>
  );
}
