import '../index.scss';

const TechSkills = () => {
  return (
    // Tech skills section
    <div className='tech_skills_section'>
      <h3 className='sidebar_title'>Tech Skills</h3>
      <ul className='sidebar_skills_list'>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>HTML/PUG</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>CSS/SCSS</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>GIT/GitHub</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>
            JavaScript/TypeScript
          </span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>jQuery</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>React JS</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>Redux</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>
            Bootstrap/Material-UI
          </span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>WebPack/Gulp</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>Responsive</span>
        </li>
        <li className='sidebar_skills_item'>
          <span className='sidebar_skills_item_text'>Cross browser</span>
        </li>
      </ul>
    </div>
  );
};

export default TechSkills;
