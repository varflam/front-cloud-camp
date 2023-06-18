 import * as React from 'react';

 import './startForm.scss';

export const StartForm = (): JSX.Element => {
  return (
    <form action="" className="start-form">
        <label htmlFor="phone" className="label">Номер телефона</label>
        <input
          type="number"
          className="input"
          id="phone"
          placeholder="+7 999 999-99-99"
          />
        <label htmlFor="email" className="label">Email</label>
        <input
          type="text"
          className="input"
          id="email"
          placeholder="tim.jennings@example.com"
          />
        <button 
        className="button"
        type="submit"
        id="button-start"
        >
          Начать
        </button>
      </form>
  );
};