import '../styles/Footer.css';

import github from '../assets/header-footer/github-logo.png';
import linkedin from '../assets/header-footer/linked-in-logo.png';
import instagram from '../assets/header-footer/instagram-logo.png';

function Footer() {
  return (
    <footer >
      <div>
        <a href="https://github.com/hjlee17" target="_blank">
            <img src={github} alt="github icon"/>
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/rebecca-lee-544a3385/" target="_blank">
            <img src={linkedin} alt="linked in icon" />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/hjlee17/" target="_blank">
        <img src={instagram} alt="instagram icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


// DONE
// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, 
    // and their profile on a third platform (Stack Overflow, Twitter)