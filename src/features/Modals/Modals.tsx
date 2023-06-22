import React, {useState} from 'react';
import { useAppDispatch } from '../../app/hooks';
import { IModals } from '../../types';
import { Link } from 'react-router-dom';
import { startAgain } from '../../app/stepSlice';

import done from '../../assets/tick_icon.svg';
import fail from '../../assets/cross_icon.svg';

import './modals.scss';

const Modals = (props: IModals) => {
  const {isSuccessed, isVisible} = props;
  const [isClosed, setIsClosed] = useState(false);

  if (!isVisible) return null;

  const closeModal = () => {
    setIsClosed(true);
  }

  if (isClosed) return null;

  const modal = isSuccessed ? <ModalSuccess/> : <ModalFail closeModal={closeModal}/>; 

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

const ModalFail = ({closeModal}: {closeModal: () => void}) => {

  return(
    <>
      <div className="modal__info">
        <p className="modal__title">Ошибка</p>
        <button 
          className="modal__close"
          onClick={() => closeModal()}>
        </button>
      </div>
      <img src={fail} alt="Fail" className="modal__img" />
      <button
        id="button-close"
        className='button button_close'
        onClick={() => closeModal()}
        >
          Закрыть
      </button>
    </>
  )
}

export default Modals;