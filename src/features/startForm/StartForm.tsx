 import * as React from 'react';

export const StartForm = (): JSX.Element => {
  return (
    <form action="" className="start-form">
        <label htmlFor="phone" className="label">Номер телефона</label>
        <input
          type="number"
          className="input"
          id="phone"
          />
        <label htmlFor="email" className="label">Email</label>
        <input
          type="text"
          className="input"
          id="email"
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