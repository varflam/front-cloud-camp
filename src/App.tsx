import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StartPage } from './pages/startPage/StartPage';
import { FormPage } from './pages/formPage/FormPage';
import './style/style.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/front-cloud-camp/" element={<StartPage/>}/>
        <Route path="/front-cloud-camp/create" element={<FormPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
