import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import Homepage from '../../components/Homepage/Homepage';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <PageTitle title="Welcome to my Homepage" subtitle="" />
      <Homepage />
    </HelmetProvider>
  );
};

export default HomePage;
