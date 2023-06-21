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

  const renderButton = () => {
    if (step === 3) {
      return <SendButton/>
    }
    
    return <NextButton/>
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
      {renderButton()}
    </div>
  );
};

const NextButton = () => {
  return(
    <button
      id="button-next" 
      className="button"
      type="submit"
      >
      Далее
    </button>
  )
}

const SendButton = () => {
  return(
    <button
      id="button-send" 
      className="button button_big"
      type="submit"
      >
      Отправить
    </button>
  )
}

export default Buttons;