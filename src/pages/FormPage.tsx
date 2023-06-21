import React from 'react';
import { useAppSelector } from '../app/hooks';
import FirstStepForm from '../features/firstStepForm/FirstStepForm';
import SecondStepForm from '../features/secondStepForm/SecondStepForm';
import ThirdStepForm from '../features/thirdStepForm/ThirdStepForm';

import './formPage.scss';

export const FormPage = () => {
  const {step} = useAppSelector(state => state.stepSlice);

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

  return (
    <div className='container'>
      {renderForm()}
      {/* <ThirdStepForm/> */}
    </div>
  );
};