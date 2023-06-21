import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { goBack } from '../../app/stepSlice';
import { Link } from 'react-router-dom';

const Buttons = () => {
  const {step} = useAppSelector(state => state.stepSlice);
  const dispatch = useAppDispatch();

  const onPrevClick = () => {
    dispatch(goBack());
  }

  const classNames = () => {
    if (step === 3) {
      return 'button button_big'
    } else {
      return 'button'
    }
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
        className={classNames()} 
        type="submit"
        >
        {step === 3 ? 'Отправить' : 'Далее'}
      </button>
    </div>
  );
};

export default Buttons;