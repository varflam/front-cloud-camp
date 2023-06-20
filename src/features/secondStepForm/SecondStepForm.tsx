import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { goForward } from '../../app/stepSlice';
import ProgressBar from '../progressBar/ProgressBar';
import Buttons from '../Buttons/Buttons';
import { setAdvantages, setCheckbox, setRadio } from '../../app/formSlice';


const SecondStepForm = () => {
  const dispatch = useAppDispatch();
  const {advantages, radio, checkbox} = useAppSelector(state => state.formSlice);
  const [advantagesState, setAdvantagesState] = useState([...advantages]);

  const schema = yup.object().shape({
    radio: yup.number().defined('Please, choose a checkbox'),
    checkbox: yup.array().min(1, 'Please, choose a checkbox')
  });

  const checkboxesID: string[] = ['field-checkbox-group-option-1', 'field-checkbox-group-option-2', 'field-checkbox-group-option-3'];
  const radiosID: string[] = ['field-radio-group-option-1', 'field-radio-group-option-2', 'field-radio-group-option-3'];

  const initialAdvantages: {[index: string]: string} = {
    'advantages-1': '',
    'advantages-2': '',
    'advantages-3': '',
  };

  const setInitialAdvantages = () => {
    if (advantagesState.length) {
      for (let i = 1; i <= advantagesState.length; i++ ) {
        initialAdvantages[`advantages-${i}`] = advantagesState[i - 1];
      }
    } else {
      for (let i = 0; i < 3; i++) {
        setAdvantagesState(state => [...state, '']);
      }
    }
  }

  setInitialAdvantages();

  const initialValues = {
    ...initialAdvantages,
    checkbox: checkbox || null,
    radio: radio || 1
  }

  return (
    <>
      <ProgressBar step={2}/>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
            const {radio, checkbox, ...advantages} = values;
            dispatch(setCheckbox(checkbox));
            dispatch(setRadio(radio));
            dispatch(setAdvantages(Object.values(advantages)));
            dispatch(goForward());
          }
        }
        // enableReinitialize={true}
      >
        {() => {
          const renderAdvantages = () => {
            return advantagesState.map((advantage, i) => {
              return (
                <div className="form__item form__item_adv" key={`form__item_adv-${i}`}>
                  <Field 
                    key={`field-advantages-${i + 1}`}
                    name={`advantages-${i + 1}`}
                    id={`field-advantages-${i + 1}`}
                    type="text"
                    placeholder="Placeholder"
                    className="input input_multiple"
                    required
                  />
                  <ErrorMessage  
                          name={`advantages-${i + 1}`}
                          className="input__error"
                          component="p"
                  />
                  <button 
                    type="button"
                    className="form__delete-img"
                    id={`button-remove-${i + 1}`}
                  >
                  </button>
                </div>
              )
            })
          }

          const createCheckboxes = () => {
            return checkboxesID.map(checkboxID => {
              return(
                <div className="form__item" key={checkboxID}>
                  <Field 
                    type="checkbox"
                    key={checkboxID}
                    id={checkboxID}
                    name="checkbox"
                    value={checkboxID[checkboxID.length - 1]}
                    className="input input_box"/>
                  <label htmlFor={checkboxID} className="label">{checkboxID[checkboxID.length - 1]}</label>
                </div>
              )
            });
          }

          const createRadios = () => {
            return radiosID.map(radioID => {
              const value = radioID[radioID.length - 1];
              return(
                <div className="form__item" key={radioID}>
                  <Field 
                    type="radio"
                    key={radioID}
                    id={radioID}
                    name="radio"
                    value={value}
                    className="input input_box"/>
                  <label htmlFor={radioID} className="label">{value}</label>
                </div>
              )
            })
          }



          return(
            <Form className='form'>
              <label className="label">Advantages</label>
              <div className="form__group">
                {renderAdvantages()}
                <button 
                  type="button"
                  // onClick={addAdvantage}
                  className="form__plus">
                </button>
              </div>
              <p className="label">Checkbox group</p>
              <div className="form__group">
                {createCheckboxes()}
              </div>
              <ErrorMessage  
                  name="checkbox"
                  className="input__error"
                  component="p"
              />
              <p className="label">Radio group</p>
              <div className="form__group" id="RadioGroup">
                {createRadios()}
              </div>
              <ErrorMessage 
                  name="radio"
                  className="input__error"
                  component="p"
                />
              <Buttons/>
            </Form>
          )
        }}
      </Formik>
    </>
  );
};

export default SecondStepForm;