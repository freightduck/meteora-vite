import React from 'react';
import Header from '../components/headerComponent';
import { Main } from '../components/mainComponent';
import { Issues } from '../components/issuesComponent';

export const HomePage = () => {
 return (
  <div>
   <Header />
   <Main />
   <Issues />
  </div>
 );
};
