import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { goForward } from '../../app/stepSlice';
import { secondStepForm } from '../../types';
import ProgressBar from '../progressBar/ProgressBar';
import Buttons from '../Buttons/Buttons';

import trashCan from '../../assets/delete_icon.svg';

const SecondStepForm = () => {
  const dispatch = useAppDispatch();
  const {advantages, radio, checkbox} = useAppSelector(state => state.formSlice);
  const initialValues: secondStepForm = {
    advantages: advantages || null,
    radio: radio || null,
    checkbox: checkbox || null,
  };

  return (
    <>
      <ProgressBar step={2}/>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            console.log(values);
          }
        }>
        <Form className='form'>
          <label className="label">Advantages</label>
          <div className="form__group">
            <div className="form__item form__item_adv">
              <Field 
                name="advantages-1"
                id="field-advantages-1"
                type="text"
                placeholder="Placeholder"
                className="input input_multiple"/>
              <button 
                className="form__delete-img"
                id="button-remove-1"
              >
              </button>
            </div>
            <div className="form__item form__item_adv">
              <Field 
                name="advantages-2"
                id="field-advantages-2"
                type="text"
                placeholder="Placeholder"
                className="input input_multiple"/>
              <button 
                className="form__delete-img"
                id="button-remove-2"
              >
              </button>
            </div>
            <div className="form__item form__item_adv">
              <Field 
                name="advantages-3"
                id="field-advantages-3"
                type="text"
                placeholder="Placeholder"
                className="input input_multiple"/>
              <button 
                className="form__delete-img"
                id="button-remove-3"
              >
              </button>
            </div>
            <button className="form__plus">
            </button>
          </div>
          <p className="label">Checkbox group</p>
            <div className="form__group">
              <div className="form__item">
              <Field 
                type="checkbox"
                id="field-checkbox-group-option-1"
                name="checkbox"
                value="1"
                className="input input_box"/>
              <label htmlFor="field-checkbox-group-option-1" className="label">1</label>
            </div>
            <div className="form__item">
              <Field 
                type="checkbox"
                id="field-checkbox-group-option-2"
                name="checkbox"
                value="2"
                className="input input_box"/>
              <label htmlFor="field-checkbox-group-option-2" className="label">2</label>
              </div>
            <div className="form__item">
              <Field 
                type="checkbox"
                id="field-checkbox-group-option-3"
                name="checkbox"
                value="3"
                className="input input_box"/>
              <label htmlFor="field-checkbox-group-option-3" className="label">3</label>
            </div>
            </div>
          <p className="label">Radio group</p>
          <div className="form__group">
            <div className="form__item">
              <Field 
                type="radio"
                id="field-radio-group-option-1"
                name="checkbox"
                value="1"
                className="input input_box"/>
              <label htmlFor="field-radio-group-option-1" className="label">1</label>
            </div>
            <div className="form__item">
              <Field 
                type="radio"
                id="field-radio-group-option-2"
                name="checkbox"
                value="2"
                className="input input_box"/>
              <label htmlFor="field-radio-group-option-2" className="label">2</label>
            </div>
            <div className="form__item">
              <Field 
                type="radio"
                id="field-radio-group-option-3"
                name="checkbox"
                value="3"
                className="input input_box"/>
              <label htmlFor="field-radio-group-option-3" className="label">3</label>
            </div>
          </div>
        </Form>
      </Formik>
      <Buttons/>
    </>
  );
};

export default SecondStepForm;