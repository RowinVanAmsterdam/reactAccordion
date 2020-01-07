import React from 'react';
import { Accordion } from './components/UI/Accordion/Accordion';
import './assets/css/anwb.scss';

export const App = () => {
  return (
    <Accordion openFirstCategory={true} />
  );
};
