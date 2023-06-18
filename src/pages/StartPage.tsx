import * as React from 'react';
import { StartForm } from '../features/startForm/StartForm';

import src from '../assets/folder.svg';

import './startPage.scss';

export const StartPage = (): JSX.Element => {
  return (
    <div className="container">
      <div className="user">
        <div className="user__avatar">АИ</div>
        <div className="user__info">
          <div className="user__name">Иван Иванов</div>
          <div className="user__socials">
            <div className="user__social">
              <img src={src} alt="folder icon" className="user__icon" />
              <a className="user__link" href="!#">Telegram</a>
            </div>
            <div className="user__social">
              <img src={src} alt="folder icon" className="user__icon" />
              <a className="user__link" href="!#">GitHub</a>
            </div>
            <div className="user__social">
              <img src={src} alt="folder icon" className="user__icon" />
              <a className="user__link" href="!#">Resume</a>
            </div>
          </div>
        </div>
      </div>
      <StartForm/>
    </div>
  );
};