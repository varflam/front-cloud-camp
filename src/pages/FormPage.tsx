import React from 'react';
import { Link } from 'react-router-dom';
import FirstStepForm from '../features/firstStepForm/FirstStepForm';

import './formPage.scss';

export const FormPage = () => {
  return (
    <div className='container'>
      <FirstStepForm/>
      <div className="buttons">
       <button
          id="button-back" 
          className='button button_light' 
          >
            <Link className='button__link' to="/front-cloud-camp">Назад</Link>
        </button>
        <button
          id="button-next" 
          className='button' 
          type="submit"
          form="first-step"
          >
          Далее
        </button>
      </div>
    </div>
  );
};