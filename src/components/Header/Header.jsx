import './header.css';
import logo from '../../img/Logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo}></img>
      <button className='header__button'>Preview</button>
    </header>
  );
}
