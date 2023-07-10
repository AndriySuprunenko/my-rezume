import './index.scss';
import Avatar from './assets/Avatar.jpg';
import SoftSkills from './components/SoftSkills';
import TechSkills from './components/TechSkills';
import Contacts from './components/Contacts';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className='main_container'>
      {/* <!-- Main content section--> */}
      <div className='main_content_section'>
        {/* <!-- About me section --> */}
        <div className='about_me_section'>
          <h2 className='about_me_profession'>Front-End Developer</h2>
          <h1 className='about_me_name'>Andrii Suprunenko</h1>

          <p className='about_me_description'>
            Hello! I'm looking for job as Front-end developer. I have 6 months
            of experience in development. In my spare time I study history,
            Ukrainian and English languages, draw portraits, love science and
            technology. Ready to learn a lot and work to achieve common goals.
          </p>
        </div>
        {/* My Portfolio */}
        <div className='projects'>
          <h3 className='main_content_title'>My Projects</h3>
          <ol className='projects-list'>
            <li className='projects-item'>
              <a
                className='projects-link'
                href='https://dapper-heliotrope-2d183b.netlify.app/'
              >
                https://dapper-heliotrope-2d183b.netlify.app
              </a>
            </li>
            <li className='projects-item'>
              <a
                className='projects-link'
                href='https://644539facb83b73ab8255af2--fastidious-pudding-2bcece.netlify.app/'
              >
                https://644539facb83b73ab8255af2--fastidious-pudding-2bcece.netlify.app/
              </a>
            </li>
            <li className='projects-item'>
              <a
                className='projects-link'
                href='https://mellifluous-salmiakki-b87625.netlify.app/'
              >
                https://mellifluous-salmiakki-b87625.netlify.app
              </a>
            </li>
          </ol>
        </div>
        {/* <!-- My work experience --> */}
        <WorkExperience />

        {/* <!-- Education --> */}
        <Education />
      </div>

      {/* <!-- Main sidebar section--> */}
      <aside className='main_sidebar_section'>
        <div className='photo-box'>
          <img className='photo' src={Avatar} alt='myPhoto' />
        </div>
        {/* <!-- Contacts section--> */}
        <Contacts />
        {/* <!-- Tech skills section--> */}
        <TechSkills />
        {/* <!-- Soft skills section--> */}
        <SoftSkills />
      </aside>
    </div>
  );
}

export default App;
