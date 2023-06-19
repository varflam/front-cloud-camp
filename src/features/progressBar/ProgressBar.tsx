import React from 'react';

import { steps } from '../../types';

import './progressBar.scss';

import purple from '../../assets/purple_dot.svg';
import gray from '../../assets/gray_dot.svg';

const ProgressBar = (props: steps) => {
  const {step} = props;
  return (
    <>
      <div className="progress">
          <div className="progress__bar">
            <img src={purple} alt="" className="progress__icon-purple"/>
            <div className="progress__gray"></div>
            <img src={gray} alt="" className="progress__icon-gray" />
            <div className="progress__gray"></div>
            <img src={gray} alt="" className="progress__icon-gray" />
          </div>
        <div className="progress__steps">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;