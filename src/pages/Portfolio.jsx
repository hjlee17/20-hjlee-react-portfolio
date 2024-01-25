import Project from '../components/Project';
import '../styles/Project.css'

import btsTimedQuizThumbnail from '../assets/portfolio-thumbnails/bts-timed-quiz.png';
import fiveDayWeatherDashboardThumbnail from '../assets/portfolio-thumbnails/five-day-weather-dashboard.png';
import itineraryPlannerThumbnail from '../assets/portfolio-thumbnails/itinerary-planner.png';
import noteTakerThumbnail from '../assets/portfolio-thumbnails/note-taker.png';
import workoutHabitTrackerThumbnail from '../assets/portfolio-thumbnails/workout-habit-tracker.png';
import placeholderThumbnail from '../assets/portfolio-thumbnails/placeholder.png';

const projectsData = [
  {
      "name": "Timed BTS Quiz",
      "thumbnail": btsTimedQuizThumbnail,
      "link": "https://hjlee17.github.io/04.1-timed-bts-quiz/",
      "github": "https://github.com/hjlee17/04.1-timed-bts-quiz"
  },
  {
      "name": "Five Day Weather Dashboard",
      "thumbnail": fiveDayWeatherDashboardThumbnail,
      "link": "https://hjlee17.github.io/06-five-day-weather-dashboard/",
      "github": "https://github.com/hjlee17/06-five-day-weather-dashboard"
  },
  {
      "name": "Itinerary Planner",
      "thumbnail": itineraryPlannerThumbnail,
      "link": "https://johnpaulzigterman.github.io/itinerary-planner/",
      "github": "https://github.com/JohnPaulZigterman/itinerary-planner.git/"
  },
  {
      "name": "Express.js Note-Taker And Task Organizer Application",
      "thumbnail": noteTakerThumbnail,
      "link": "https://intense-citadel-43123-3a531499351d.herokuapp.com/",
      "github": "https://github.com/hjlee17/11-express.js-note-taker-and-task-organizer-application.git/",        
      "status": "offline"
  },
  {
      "name": "Workout Habit Tracker",
      "thumbnail": workoutHabitTrackerThumbnail,
      "link": "https://dry-cliffs-36646-632c1ada6b75.herokuapp.com/",
      "github": "https://github.com/hjlee17/workout-habit-tracker.git",
      "status": "offline"
  },
  {
      "name": "Itinerate: A Social Trip-Planning Tool",
      "thumbnail": placeholderThumbnail,
      "link": "https://github.com/JohnPaulZigterman/itinerary-site.git",
      "github": "https://github.com/JohnPaulZigterman/itinerary-site.git"
  }
]

export default function Portfolio() {
  return (
    <div className='portfolio'> 
      <h1>Portfolio</h1>
             
        <div className='portfolio'>
          {projectsData.map((project, index) => (
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

// TODO: better styling
// project thumbnails are not working after deployment!