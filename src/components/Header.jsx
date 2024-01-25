import '../styles/Header.css';
import profilePic from '../assets/header-footer/profpic.png';
import name from '../assets/header-footer/name.png';
import NavBar from './NavBar';

function Header() {
  return (
    <header>
      <div>
        <div className='container'>
          <div className='left-container'>
            <img src={profilePic} alt="profile" />
          </div>
          <div className='right-container'>
            <img src={name} alt="name" />
          </div>
        </div>
      </div>
      <NavBar />
    </header>

  );
}

export default Header;

// DONE
// WHEN I view the header
// THEN I am presented with the developer's name and 
// navigation with titles corresponding to different sections of the portfolio

// TODO: update right-container image!