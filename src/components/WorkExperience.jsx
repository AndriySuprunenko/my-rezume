import '../index.scss';

const WorkExperience = () => {
  return (
    // My work experience
    <div className='my_work_experience'>
      <h3 className='main_content_title'>Work Experience</h3>

      {/* <!-- Company 2 --> */}
      <div className='my_work_experience_company_block'>
        <h4 className='my_work_experience_position'>
          System{' '}
          <span className='my_work_experience_company'>Administrator</span>
        </h4>
        <p className='my_work_experience_period'>October 2019 - Today</p>

        <div className='my_work_experience_duties'>
          <div className='my_work_experience_duty'>
            My responsibilities included website administration, SRM system
            management, computer maintenance, IP telephony integration and
            marketing.
          </div>
        </div>
      </div>

      {/* <!-- Company 1 --> */}
      <div className='my_work_experience_company_block'>
        <h4 className='my_work_experience_position'>
          Restaurant{' '}
          <span className='my_work_experience_company'>MacDonalds</span>{' '}
        </h4>
        <p className='my_work_experience_period'>April 2018 - June 2019</p>

        <div className='my_work_experience_duties'>
          <div className='my_work_experience_duty'>
            I gained communication skills, became more stress-resistant,
            developed the ability to work in a team.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
