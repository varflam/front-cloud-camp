import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { goBack, goForward } from '../../app/stepSlice';
import { Link } from 'react-router-dom';

const Buttons = () => {
  const {step} = useAppSelector(state => state.stepSlice);
  const dispatch = useAppDispatch();

  const onNextClick = () => {
    dispatch(goForward);
    console.log(step);
  }

  const onPrevClick = () => {
    dispatch(goBack);
  }

  return (
    <div className="buttons">
      <button
        id="button-back" 
        className='button button_light' 
        onClick={onPrevClick}
        >
          {step === 1 ? <Link className='button__link' to="/front-cloud-camp">Назад</Link> : 'Назад'}
      </button>
      <button
        id="button-next" 
        className='button' 
        type="submit"
        // form={setFormSubmit()}
        >
        Далее
      </button>
    </div>
  );
};

export default Buttons;