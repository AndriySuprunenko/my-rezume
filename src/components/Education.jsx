import '../index.scss';

const Education = () => {
  return (
    // Education
    <div className='education'>
      <h3 className='education_title'>Education</h3>
      {/* Beetroot */}
      <div className='education_block position'>
        <div className='education_block_main'>
          <h4 className='education_nuor'>Beetroot Academy</h4>
          <h5 className='education_management'>Front-End Development</h5>
          <p className='education_period'>March 2022 - June 2022</p>
        </div>
        <div>
          <a
            className='contacts_section_link'
            href='https://drive.google.com/file/d/1hufepc4hhNXOoCw44PCs5l8HrsATZbm8/view?usp=sharing'
          >
            Certificate
          </a>
        </div>
      </div>
      {/* University */}
      {/* The teacher */}
      <div className='education_block'>
        <h4 className='education_nuor'>
          Kremenchuk Mykhailo Ostrohradskyi National University
        </h4>
        <h5 className='education_management'>
          Master of Educational and Pedagogical Sciences, Kremenchug
        </h5>
        <p className='education_period'>September 2021 - December 2022</p>
      </div>
      {/* KI */}
      <div className='education_block'>
        <h4 className='education_nuor'>
          Kremenchuk Mykhailo Ostrohradskyi National University
        </h4>
        <h5 className='education_management'>Computer engineering</h5>
        <p className='education_period'>September 2017 - June 2021</p>
      </div>
      <div className='education_block'>
        <h4 className='education_nuor'>Languages</h4>
        <h5 className='education_management'>English - B1</h5>
        <h5 className='education_management'>Українська - native</h5>
      </div>
    </div>
  );
};

export default Education;
