import './header.scss';
import logo from './Img/logo.svg';
import user from './Img/user.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo_nav">
        <img src={logo} alt="logo" className="header-logo" />

        <nav className="header-nav">
          <ul className="header-nav_list">
            <li className="header-nav_list_item">
              <a href="#about" className="header-nav_link">
                Who we are
              </a>
            </li>
            <li className="header-nav_list_item">
              <a href="#contacts" className="header-nav_link">
                Contacts
              </a>
            </li>
            <li className="header-nav_list_item">
              <a href="#menu" className="header-nav_link">
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-user">
        <button className="header-signUp_btn">Sign Up</button>
        <img src={user} alt="User" className="header-user_img" />
      </div>

      <menu className="header-menu">--</menu>
    </header>
  );