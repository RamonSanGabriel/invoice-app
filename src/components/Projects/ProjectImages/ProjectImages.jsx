// import { projects } from '../../../data/projects';
// import { projects } from '../../../data/projects/';
// import HomeworkLists from '../HomeworkLists/HomeworkLists';
import css from '../ProjectImages/ProjectImages.module.css';

const ProjectImages = ({ id, src, title, href }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer">
        <figure>
          <img src={src} title={title} width={260} height={240} />
          <figcaption>{title}</figcaption>
        </figure>
      </a>{' '}
      <div></div>
    </li>
  );
};

export default ProjectImages;
