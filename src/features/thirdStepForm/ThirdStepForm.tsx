import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import Buttons from '../Buttons/Buttons';

const ThirdStepForm = () => {
  return (
    <>
      <ProgressBar step={3}/>
      <Buttons/>
    </>
  );
};

export default ThirdStepForm;