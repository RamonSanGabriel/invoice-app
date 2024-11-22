import HomeworkLists from './HomeworkLists/HomeworkLists';
import css from './Projects.module.css';
import { projects } from '../../data/projects';
import ProjectImages from './ProjectImages/ProjectImages';
import { BeatLoader } from 'react-spinners';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <div className={css.projectsContainer}>
      <HomeworkLists />
      <Suspense
        fallback={
          <div className={css.loader}>
            <BeatLoader color="#40bf9b" />
          </div>
        }
      >
        <Outlet />
        {/* Outlet is a special component from react-router-dom that renders the current route */}
      </Suspense>
      <div className={css.projects}>
        {projects.map(({ id, title, src, href }) => (
          <ProjectImages key={id} title={title} src={src} href={href} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
