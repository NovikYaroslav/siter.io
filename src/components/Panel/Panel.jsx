import { useEffect, useState } from 'react';
import './panel.css';
import { settings, easingOptions } from '../../utils/data';
import { useAnimation } from '../../context/AnimationContext';
import { ValueExtractor } from '../../utils/formating-functions';
import off from '../../img/Checkbox.png';
import on from '../../img/Checkbox.svg';

export default function Panel() {
  const { elements, selectedElement, editAnimation } = useAnimation();
  const [replay, setReplay] = useState(false);
  const [easing, setEasing] = useState('Easy');

  // Поправь чтобы слайдеры отдавали число а не стригу

  useEffect(() => {
    if (selectedElement) {
      setReplay(ValueExtractor(elements, selectedElement, 'replay'));
      setEasing(ValueExtractor(elements, selectedElement, 'easing'));
    }
  }, [selectedElement]);

  const handleSliderChange = (event) => {
    editAnimation(selectedElement, event.target.id, event.target.value);
  };

  const handleEasingChange = (event) => {
    setEasing(event.target.value);
    editAnimation(selectedElement, 'easing', event.target.value);
  };

  const handleReplayChange = () => {
    setReplay(!replay);
    editAnimation(selectedElement, 'replay', !replay);
  };

  const calculateGradient = (value, min, max) => {
    const absoluteValue = Math.abs(value);
    const percentage = (absoluteValue / (Math.abs(min) + Math.abs(max))) * 100;
    if (value < 0) {
      return `linear-gradient(to left,
                rgb(175, 175, 175) ${percentage}%,
                rgb(224, 224, 224) ${percentage}%,
                rgb(224, 224, 224) 100%)`;
    } else {
      return `linear-gradient(to right, 
                rgb(175, 175, 175) 0%,
                rgb(175, 175, 175) ${percentage}%,
                rgb(224, 224, 224) ${percentage}%,
                rgb(224, 224, 224) 100%)`;
    }
  };

  return (
    <div className='panel'>
      {settings.map((setting) => (
        <div className='panel__option-container' key={setting.name}>
          <label className='panel__option-title'>{setting.name}</label>
          <input
            type='range'
            max={setting.max}
            min={setting.min}
            step={setting.step}
            value={ValueExtractor(elements, selectedElement, setting.name)}
            onChange={(event) => handleSliderChange(event)}
            className='panel__slider'
            style={{
              background: calculateGradient(
                ValueExtractor(elements, selectedElement, setting.name),
                setting.min,
                setting.max
              ),
            }}
            id={setting.name}
          />
          <label className='panel__slider-value'>
            {ValueExtractor(elements, selectedElement, setting.name)}
            {setting.unit}
          </label>
        </div>
      ))}
      <div className='panel__option-container'>
        <div className='panel__option-container_dropdown'>
          <label className='panel__option-title'>Easing</label>
          <select
            className='panel__option-select'
            onChange={(event) => handleEasingChange(event)}
            value={easing}
            disabled={!selectedElement}
          >
            {easingOptions.map((option) => (
              <option
                value={Object.keys(option)[0]}
                key={Object.keys(option)[0]}
              >
                {Object.values(option)[0]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='panel__option-container'>
        <div className='panel__option-container_dropdown'>
          <label className='panel__option-title'>Replay</label>
          <button
            className='panel__option-button'
            onClick={() => handleReplayChange()}
            disabled={selectedElement ? false : true}
          >
            <img src={replay ? on : off} />
          </button>
        </div>
      </div>
    </div>
  );
}
