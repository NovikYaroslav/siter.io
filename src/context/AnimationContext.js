import { useState, useEffect, createContext, useContext } from 'react';
import { elementsData } from '../utils/data';

const AnimationContext = createContext();

const AnimationContextProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState('');
  const savedSettings = JSON.parse(localStorage.getItem('elements'));

  useEffect(() => {
    if (savedSettings.length) {
      setElements(savedSettings);
    } else {
      setElements(elementsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('elements', JSON.stringify(elements));
  }, [elements]);

  const selectElement = (element) => {
    setSelectedElement(element);
  };

  const editAnimation = (id, parameter, value) => {
    const updatedElements = elements.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          animation: {
            ...element.animation,
            [parameter]: value,
          },
        };
      }
      return element;
    });
    setElements(updatedElements);
  };

  return (
    <AnimationContext.Provider
      value={{
        elements,
        selectedElement,
        selectElement,
        editAnimation,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      'useAnimation должен быть использован в компоненте, обернутом в AnimationContextProvider'
    );
  }
  return context;
};

export { AnimationContextProvider, useAnimation };
