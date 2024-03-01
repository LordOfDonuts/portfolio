import './ProjectTitle.css';

const ProjectTitle = ({ name }) => {
  return (
    <div className='project-title'>
      <p className='subtitle'>PROJECT</p>
      <h3 className='project-name'>{name}</h3>
    </div>
  );
};

export default ProjectTitle;
