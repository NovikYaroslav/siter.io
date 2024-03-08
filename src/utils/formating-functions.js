import { elementsData } from './data';

export function formatSliderValue(value, step) {
  if (parseFloat(value) === 0) {
    return parseFloat(value).toFixed(0);
  }
  if (step !== undefined && step !== 1) {
    return parseFloat(value)
      .toFixed(step.toString().split('.')[1]?.length)
      .replace(/^0+/, '');
  } else {
    return parseFloat(value).toFixed(step.toString().split('.')[1]?.length);
  }
}

export function ValueExtractor(elements, id, parameter) {
  if (!id) {
    return 0;
  } else {
    const selectedElement = elements.find((element) => element.id === id);
    return parameter === 'easing' || 'replay'
      ? selectedElement.animation[parameter]
      : Number(selectedElement.animation[parameter]);
  }
}
