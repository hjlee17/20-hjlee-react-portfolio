import Project from '../components/Project';
import '../styles/Project.css'

import ProjectsData from '../data/data.json'

export default function Portfolio() {
  return (
    <div className='portfolio'> 
      <h1>Portfolio</h1>
             
        <div className='portfolio'>
          {ProjectsData.map((project, index) => (
            <Project 
              key={index} 
              name={project.name} 
              thumbnail={project.thumbnail} 
              link={project.link} 
              github={project.github} />
          ))}
        </div>

    </div>
  );
}

// DONE
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications
    // with links to both the deployed applications and the corresponding GitHub repositories

// TODO: better stlying