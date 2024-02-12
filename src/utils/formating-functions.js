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
