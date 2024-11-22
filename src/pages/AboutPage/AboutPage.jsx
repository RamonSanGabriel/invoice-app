import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import About from '../../components/About/About';

const AboutPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>About</title>
        </Helmet>
        <PageTitle title="" subtitle="Learn more about me" />
        <About />
      </HelmetProvider>
    </div>
  );
};

export default AboutPage;
