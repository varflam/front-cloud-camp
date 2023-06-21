import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { modals } from '../../types';
import { Link } from 'react-router-dom';
import { startAgain } from '../../app/stepSlice';

import done from '../../assets/tick_icon.svg';
import fail from '../../assets/cross_icon.svg';

import './modals.scss';

const Modals = (props: modals) => {
  const {isSuccessed, isVisible} = props;

  if (!isVisible) return null;

  const modal = isSuccessed ? <ModalSuccess/> : <ModalFail/>

  return(
    <>
      <div className="overlay">
        <div className="modal">
        {modal}
        </div>
      </div>
    </>
  )
};

const ModalSuccess = () => {
  const dispatch = useAppDispatch();
  return(
    <>
      <p className="modal__title">Форма успешно отправлена</p>
      <img src={done} alt="Done" className="modal__img" />
      <button
        id="button-to-main"
        className='button button_big'
        onClick={() => dispatch(startAgain())}
        >
          <Link className='button__link' to="/front-cloud-camp">На главную</Link>
      </button>
    </>
  )
}

const ModalFail = () => {
  return(
    <>
      <div className="modal__info">
        <p className="modal__title">Ошибка</p>
        <button className="modal__close"></button>
      </div>
      <img src={fail} alt="Fail" className="modal__img" />
      <button
        id="button-close"
        className='button'
        >
          Закрыть
      </button>
    </>
  )
}

export default Modals;