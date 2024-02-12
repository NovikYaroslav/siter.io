import './selection.css';

export default function Selection({ children }) {
  return (
    <div className='selection'>
      <div className='selection__rectagle'></div>
      <div className='selection__rectagle_top-right'></div>
      <div className='selection__rectagle_top-left'></div>
      <div className='selection__rectagle_bottom-left'></div>
      <div className='selection__container'>{children}</div>
    </div>
  );
}
