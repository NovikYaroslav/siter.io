import Selection from '../Selection/Selection';
import './canvas.css';
import picture from '../../img/picture.png';

export default function Canvas() {
  return (
    <div className='canvas'>
      <div className='canvas__container-left'>
        <h1 className='canvas__title'>Animation Settings</h1>
        <p className='canvas__text'>
          The user should have the option to select any element on the page and
          set up its animation using the controls in the right panel. A dotted
          line will show the element's position and state before the animation
          begins, giving the user a clear idea of how the animation will appear.
          The preview button on the top panel will open the result in a new tab.
        </p>
        <Selection>
          <button className='canvas__button'>Button</button>
        </Selection>
      </div>
      <div className='canvas__container-right'>
        <img
          style={{ width: '300px', height: '300px', borderRadius: '3px' }}
          src={picture}
        />
      </div>
    </div>
  );
}
