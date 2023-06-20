import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import Buttons from '../Buttons/Buttons';

const SecondStepForm = () => {
  return (
    <>
      <ProgressBar step={2}/>
      <Buttons/>
    </>
  );
};

export default SecondStepForm;