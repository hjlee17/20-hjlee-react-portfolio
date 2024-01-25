import '../styles/Resume.css';

export default function Resume() {
  return (
    <div className='resume'> 

      <h1>Resume</h1>

      <div className='skills-container'>

        <p>⚠️ this section will be updated, come back later! ⚠️</p>

        {/* <div className='skills-list'>
          <li>skill</li>
          <li>skill</li>
          <li>skill</li>
          <li>skill</li>
          <li>skill</li>
        </div> */}

        <div className='under-construction'>🚧</div>

      </div>


      <a href='docs/sample.pdf' download='SampleDocument'>
        Download Resume
      </a>

    </div>
  );
}

// DONEish
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// TODO: list