import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import { AnimationContextProvider } from '../../context/AnimationContext';

export default function App() {
  return (
    <>
      <Header />
      <AnimationContextProvider>
        <Main />
      </AnimationContextProvider>
    </>
  );
}
