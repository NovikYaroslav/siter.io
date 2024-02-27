import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../img/Logo.svg';

export default function Header() {
  const navigate = useNavigate();
  const currentLocation = useLocation();

  function handleNavigationButtonClick() {
    currentLocation.pathname === '/preview'
      ? navigate('/')
      : navigate('/preview');
  }

  return (
    <header className='header'>
      <img className='header__logo' src={logo}></img>
      <button
        className='header__button'
        onClick={() => {
          handleNavigationButtonClick();
        }}
      >
        {currentLocation.pathname === '/preview' ? 'Back' : 'Preview'}
      </button>
    </header>
  );
}
