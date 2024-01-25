import '../styles/About.css';
import arthur from '../assets/arthur.webp';

export default function About() {
  return (
    <div className='about-me'> 
      <h1>About Me</h1>
      <div className='about-me-container'>
        <div className='left'><img src={arthur} alt='lorcana arthur' /></div>
        <div className='right'>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Hi, I'm Rebecca, and I'm from the Metro Detroit area of Michigan.
          I have a degree in English Literature, and after a few years of working in 
          technical writing in the manufacturing field, I'm in the process of 
          completing a full-stack coding bootcamp.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Most recently, I've been enjoying Lorcana, the new trading card game made by Disney.
          Like Arthur, I'll always be a forever student!</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      
    </div>
  );
}

// DONE
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default

// DONE
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them