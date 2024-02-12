import { useState } from 'react';
import './panel.css';
import { settings } from '../../utils/data';
import { formatSliderValue } from '../../utils/formating-functions';
import arrow from '../../img/arrow.svg';
import off from '../../img/Checkbox.png';
import on from '../../img/Checkbox.svg';

export default function Panel() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [delay, setDelay] = useState(0);
  const [replay, setReplay] = useState(false);

  const handleSliderChange = (event, setState) => {
    setState(event.target.value);
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
        <div className='panel__slider-container' key={setting.name}>
          <label className='panel__slider-title'>{setting.name}</label>
          <input
            type='range'
            max={setting.max}
            min={setting.min}
            step={setting.step}
            value={eval(setting.name)}
            onChange={(event) =>
              handleSliderChange(
                event,
                eval(
                  'set' +
                    setting.name.charAt(0).toUpperCase() +
                    setting.name.slice(1)
                )
              )
            }
            className='panel__slider'
            style={{
              background: calculateGradient(
                eval(setting.name),
                setting.min,
                setting.max
              ),
            }}
            id={setting.name}
          />
          <label className='panel__slider-value'>
            {formatSliderValue(eval(setting.name), setting.step)}
            {setting.unit}
          </label>
        </div>
      ))}
      <div className='panel__slider-container'>
        <div className='panel__slider-container_dropdown'>
          <label className='panel__slider-title'>Easing</label>
          <select className='panel__slider-option'>
            <option value='audi'>Easy</option>
            <option value='volvo'>Easy-in</option>
            <option value='saab'>Easy-out</option>
            <option value='opel'>Easy-in-out</option>
          </select>
        </div>
      </div>
      <div className='panel__slider-container'>
        <div className='panel__slider-container_dropdown'>
          <label className='panel__slider-title'>Replay</label>
          <button
            className='panel__slider-button'
            onClick={() => {
              setReplay(!replay);
            }}
          >
            <img src={replay ? on : off} />
          </button>
        </div>
      </div>
    </div>
  );
}
