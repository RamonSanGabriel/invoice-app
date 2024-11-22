import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { BeatLoader } from 'react-spinners';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default SharedLayout;
