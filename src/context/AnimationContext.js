import { useState, useEffect, createContext, useContext } from 'react';
import { elementsData } from '../utils/data';

const AnimationContext = createContext();

const AnimationContextProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState('');

  useEffect(() => {
    setElements(elementsData);
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

  // const removeReview = (id) => {
  //   const updatedReviews = reviews.filter((review) => review.id !== id);
  //   setReviews(updatedReviews);
  //   saveJson(updatedReviews);
  // };

  // const editReview = ({
  //   editedId,
  //   editedTitle,
  //   editedEmail,
  //   editedPhone,
  //   editedDate,
  //   editedReviewRate,
  //   editedContent,
  // }) => {
  //   console.log(editedDate);
  //   const updatedReviews = reviews.map((review) =>
  //     review.id === editedId
  //       ? {
  //           ...review,
  //           title: editedTitle,
  //           email: editedEmail,
  //           phone: editedPhone,
  //           date: formatDate(editedDate),
  //           review: { ...review.review, reviewRate: editedReviewRate },
  //           content: editedContent,
  //         }
  //       : review
  //   );
  //   setReviews(updatedReviews);
  //   saveJson(updatedReviews);
  // };

  // const tooglePopupVisability = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // useEffect(() => {
  //   setReviews(initialReviews.reviews);
  //   setReviewsOnMain(shuffleArray(initialReviews.reviews));
  // }, []);

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
