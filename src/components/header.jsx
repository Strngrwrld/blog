import '../assets/styles/header.scss';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CodeIcon from '@material-ui/icons/Code';
import logo from '../assets/images/logo_white.png';

const Header = () => (
  <div className='header'>
    <img src={logo} alt='Not Found' className='header_logo' />

    <ul className='header_nav'>
      <li>
        <HomeIcon />
        <a href='#'>Home</a>
      </li>

      <li>
        <AccountCircleIcon />
        <a href='#'>About</a>
      </li>

      <li>
        <CodeIcon />
        <a href='#'>Projects</a>
      </li>
    </ul>
  </div>
);

export default Header;
