import React from 'react';

import { steps } from '../../types';

import './progressBar.scss';

import purple from '../../assets/purple_dot.svg';
import gray from '../../assets/gray_dot.svg';
import checkedDot from '../../assets/checked_dot.svg';

const ProgressBar = (props: steps) => {
  const {step} = props;
  switch(step) {
    case 1:
      return <Step1/>
    case 2:
      return <Step2/>
    case 3:
      return <Step3/>
    default:
      return <Step1/>
  }
};

const Step1 = () => {
  return (
    <div className="progress">
        <div className="progress__bar">
          <img src={purple} alt="purple dot" className="progress__icon"/>
          <div className="progress__line progress__line_gray"></div>
          <img src={gray} alt="gray dot" className="progress__icon" />
          <div className="progress__line progress__line_gray"></div>
          <img src={gray} alt="gray dot" className="progress__icon" />
        </div>
      <div className="progress__steps">
        <span className="progress__step_active">1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  )
}

const Step2 = () => {
  return(
    <div className="progress">
        <div className="progress__bar">
          <img src={checkedDot} alt="checked dot" className="progress__icon"/>
          <div className="progress__line progress__line_purple"></div>
          <img src={purple} alt="purple dot" className="progress__icon" />
          <div className="progress__line progress__line_gray"></div>
          <img src={gray} alt="gray dot" className="progress__icon" />
        </div>
      <div className="progress__steps">
        <span className="progress__step_active">1</span>
        <span className="progress__step_active">2</span>
        <span>3</span>
      </div>
    </div>
  )
}
const Step3 = () => {
  return(
    <div className="progress">
        <div className="progress__bar">
          <img src={checkedDot} alt="checked dot" className="progress__icon"/>
          <div className="progress__line progress__line_purple"></div>
          <img src={checkedDot} alt="checked dot" className="progress__icon" />
          <div className="progress__line progress__line_purple"></div>
          <img src={purple} alt="purple dot" className="progress__icon" />
        </div>
      <div className="progress__steps">
        <span className="progress__step_active">1</span>
        <span className="progress__step_active">2</span>
        <span className="progress__step_active">3</span>
      </div>
    </div>
  )
}

export default ProgressBar;