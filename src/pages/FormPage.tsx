import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FirstStepForm from '../features/firstStepForm/FirstStepForm';
import SecondStepForm from '../features/secondStepForm/SecondStepForm';
import ThirdStepForm from '../features/thirdStepForm/ThirdStepForm';

import './formPage.scss';

export const FormPage = () => {
  const [step, setStep] = useState(1);

  const goForward = () => {
    if (step <= 3) {
      setStep(step => step += 1);
    }
  }

  const goBack = () => {
    if (step > 1) {
      setStep(step => step -= 1);
    }
  }

  const renderForm = () => {
    switch(step) {
      case 1:
        return <FirstStepForm/>
      case 2: 
        return <SecondStepForm/>
      case 3:
        return <ThirdStepForm/>
      default:
        return <FirstStepForm/>
    }
  }

  const setFormSubmit = () => {
    switch(step) {
      case 1:
        return 'first-step';
      case 2:
        return 'second-step';
      case 3:
        return 'third-step';
      default:
        return '';
    }
  }

  return (
    <div className='container'>
      {renderForm()}
      <div className="buttons">
       <button
          id="button-back" 
          className='button button_light' 
          onClick={goBack}
          >
            {step === 1 ? <Link className='button__link' to="/front-cloud-camp">Назад</Link> : 'Назад'}
        </button>
        <button
          id="button-next" 
          className='button' 
          type="submit"
          form="first-step"
          onClick={goForward}
          >
          Далее
        </button>
      </div>
    </div>
  );
};