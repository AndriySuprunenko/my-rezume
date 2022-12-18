import './index.scss';
import Avatar from './assets/Avatar.jpg';

function App() {
  return (
    <div className="main_container">
      {/* <!-- Main content section--> */}
      <div className="main_content_section">
        {/* <!-- About me section --> */}
        <div className="about_me_section">
          <h2 className="about_me_profession">Front-End Developer</h2>
          <h1 className="about_me_name">Andrii Suprunenko</h1>

          <p className="about_me_description">
            Hi. I'm looking for job as Front-end developer. In my spare
            time I study history, English languages, draw portraits, love
            science and technology. I want to join your team and grow with you.
            Ready to learn a lot and work to achieve common goals.
          </p>
        </div>
        {/* My Portfolio */}
        <div className="projects">
          <h3 className="main_content_title">My Projects</h3>
          <ol className="projects-list">
            <li className="projects-item">
              <a
                className="projects-link"
                href="https://dapper-heliotrope-2d183b.netlify.app/"
              >
                https://dapper-heliotrope-2d183b.netlify.app
              </a>
            </li>
            <li className="projects-item">
              <a
                className="projects-link"
                href="https://mellifluous-salmiakki-b87625.netlify.app/"
              >
                https://mellifluous-salmiakki-b87625.netlify.app
              </a>
            </li>
          </ol>
        </div>
        {/* <!-- My work experience --> */}
        <div className="my_work_experience">
          <h3 className="main_content_title">Work Experience</h3>

          {/* <!-- Company 2 --> */}
          <div className="my_work_experience_company_block">
            <h4 className="my_work_experience_position">
              System{' '}
              <span className="my_work_experience_company">Administrator</span>
            </h4>
            <p className="my_work_experience_period">October 2019 - Today</p>

            <div className="my_work_experience_duties">
              <div className="my_work_experience_duty">
                My responsibilities included website administration, SRM system
                management, computer maintenance, IP telephony integration and
                marketing.
              </div>
            </div>
          </div>

          {/* <!-- Company 1 --> */}
          <div className="my_work_experience_company_block">
            <h4 className="my_work_experience_position">
              Restaurant{' '}
              <span className="my_work_experience_company">MacDonalds</span>{' '}
            </h4>
            <p className="my_work_experience_period">April 2018 - June 2019</p>

            <div className="my_work_experience_duties">
              <div className="my_work_experience_duty">
                I gained communication skills, became more stress-resistant,
                developed the ability to work in a team.
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Education --> */}
        <div className="education">
          <h3 className="education_title">Education</h3>
          {/* Beetroot */}
          <div className="education_block position">
            <div className="education_block_main">
              <h4 className="education_nuor">Beetroot Academy</h4>
              <h5 className="education_management">Front-End Development</h5>
              <p className="education_period">March 2022 - June 2022</p>
            </div>
            <div>
              <a
                className="contacts_section_link"
                href="https://drive.google.com/file/d/1hufepc4hhNXOoCw44PCs5l8HrsATZbm8/view?usp=sharing"
              >
                Certificate
              </a>
            </div>
          </div>
          {/* University */}
          {/* The teacher */}
          <div className="education_block">
            <h4 className="education_nuor">
              Ostrogradsky Kremenchutsk National University
            </h4>
            <h5 className="education_management">
              Pedagogical and educational sciences
            </h5>
            <p className="education_period">September 2021 - December 2022</p>
          </div>
          {/* KI */}
          <div className="education_block">
            <h4 className="education_nuor">
              Ostrogradsky Kremenchutsk National University
            </h4>
            <h5 className="education_management">Computer engineering</h5>
            <p className="education_period">September 2017 - June 2021</p>
          </div>
          <div className="education_block">
            <h4 className="education_nuor">Languages</h4>
            <h5 className="education_management">English - B1</h5>
            <h5 className="education_management">Українська - native</h5>
          </div>
        </div>
      </div>

      {/* <!-- Main sidebar section--> */}
      <aside className="main_sidebar_section">
        <div className="photo-box">
          <img className="photo" src={Avatar} alt="myPhoto" />
        </div>

        {/* <!-- Contacts section--> */}
        <div className="contacts_section">
          <h3 className="sidebar_title">Contacts</h3>
          {/* Telephone */}
          <div className="position">
            <span className="contacts_section_type">
              <div className="icons">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
                  ></path>
                </svg>
              </div>
              :
            </span>
            <a className="contacts_section_link_tel" href="tel:+380984956069">
              +380984956069
            </a>
          </div>
          {/* Telegram */}
          <div className="position">
            <span className="contacts_section_type">
              <div className="icons">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M8 0c-4.419 0-8 3.581-8 8s3.581 8 8 8 8-3.581 8-8-3.581-8-8-8zM11.931 5.484l-1.313 6.184c-0.091 0.441-0.356 0.544-0.725 0.341l-2-1.478-0.959 0.934c-0.112 0.109-0.2 0.2-0.4 0.2-0.259 0-0.216-0.097-0.303-0.344l-0.681-2.237-1.978-0.616c-0.428-0.131-0.431-0.425 0.097-0.634l7.706-2.975c0.35-0.159 0.691 0.084 0.556 0.625z"
                  ></path>
                </svg>
              </div>
              :
            </span>
            <a
              className="contacts_section_link_tel"
              href="https://t.me/suprunenkoAndrey"
            >
              @suprunenkoAndrey
            </a>
          </div>
          {/* Mail */}
          <div className="position">
            <span className="contacts_section_type">
              <div className="icons">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.468 1.2 2.667 2.667 2.667h10.666c1.467 0 2.667-1.199 2.667-2.667v-10.666c0-1.467-1.2-2.667-2.667-2.667zM13.333 2c0.125 0 0.243 0.036 0.344 0.099l-5.678 4.694-5.677-4.694c0.101-0.063 0.219-0.099 0.344-0.099h10.666zM2.667 14c-0.030 0-0.060-0.002-0.089-0.006l3.525-4.89-0.457-0.457-3.646 3.646v-9.549l6 7.256 6-7.256v9.549l-3.646-3.646-0.457 0.457 3.525 4.89c-0.029 0.004-0.059 0.006-0.088 0.006h-10.666z"
                  ></path>
                </svg>
              </div>
              :
            </span>
            <a
              className="contacts_section_link"
              href="mailto:suprunenko.andriy@gmail.com"
            >
              suprunenko.andriy@gmail.com
            </a>
          </div>
          {/* Linkedin */}
          <div className="position">
            <span className="contacts_section_type">
              <div className="icons">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"
                  ></path>
                </svg>
              </div>
              :
            </span>
            <a
              className="contacts_section_link"
              href="https://www.linkedin.com/in/andrii-suprunenko-frontend"
            >
              andrii-suprunenko-frontend
            </a>
          </div>
          {/* GitHub */}
          <div className="position">
            <span className="contacts_section_type">
              <div className="icons">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"
                  ></path>
                </svg>
              </div>
              :
            </span>
            <a
              className="contacts_section_link"
              href="https://github.com/AndriySuprunenko"
            >
              AndriySuprunenko
            </a>
          </div>
        </div>

        {/* <!-- Tech skills section--> */}
        <div className="tech_skills_section">
          <h3 className="sidebar_title">Tech Skills</h3>
          <ul className="sidebar_skills_list">
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">HTML/PUG</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">CSS/SCSS</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">GIT/GitHub</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">
                JavaScript/TypeScript
              </span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">jQuery</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">React JS</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Redux</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">
                Bootstrap/Material-UI
              </span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">WebPack/Gulp</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Responsive</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Cross browser</span>
            </li>
          </ul>
        </div>

        {/* <!-- Soft skills section--> */}
        <div className="soft_skills_section">
          <h3 className="sidebar_title">Soft Skills</h3>
          <ul className="sidebar_skills_list">
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Teamwork</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Confidence</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Friendliness</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">
                Giving and receiving constructive feedback
              </span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Active listening</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Respectfulness</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Training ability</span>
            </li>
            <li className="sidebar_skills_item">
              <span className="sidebar_skills_item_text">Trust</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default App;
