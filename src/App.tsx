import React from 'react';
import { Accordion } from './components/UI/Accordion/Accordion';
import './assets/css/anwb.scss';
import './App.css';

export const App = () => {
  return (
    <Accordion openFirstCategory={true} />
  );
};
