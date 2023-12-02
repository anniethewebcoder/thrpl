import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ActivitiesList from './components/ActivitiesList';
import { ACTIVITIES_MOCK } from "./components/mocklist";

function App() {
  return (
    <ActivitiesList activities={ACTIVITIES_MOCK}/>
  );
}

export default App;
