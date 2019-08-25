import React from 'react';
import { useIsLoggedIn } from '../AuthContext';
import AuthNavigation from '../navigation/AuthNavigation';
import MainNavigation from '../navigation/MainNavigation';

export default () => {
  // const isLoggedIn = false;
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
