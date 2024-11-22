import { Routes, Route } from 'react-router-dom';
// import Button from './Button/Button';
// import NavLinks from './NavLinks/NavLinks';
import SharedLayout from './SharedLayout/SharedLayout';
/* import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import WebStudio from '../pages/ProjectPage/Html/WebStudio/WebStudio';
import MovieSearch from '../pages/ProjectPage/Javascript/MovieSearch';
import Phonebook from '../pages/ProjectPage/React/Phonebook'; */
import { lazy } from 'react';
import NotFound from './NotFound/NotFound';

// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const ProjectPage = lazy(() => import('../pages/ProjectPage/ProjectPage'));
const WebStudio = lazy(() =>
  import('../pages/ProjectPage/Html/WebStudio/WebStudio')
);
const MovieSearch = lazy(() =>
  import('../pages/ProjectPage/Javascript/MovieSearch')
);
const Phonebook = lazy(() => import('../pages/ProjectPage/React/Phonebook'));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectPage />}>
          <Route path="webstudio" element={<WebStudio />} />
          <Route path="moviesearch" element={<MovieSearch />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
