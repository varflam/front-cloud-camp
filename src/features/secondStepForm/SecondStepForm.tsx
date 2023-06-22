import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { goForward } from '../../app/stepSlice';
import ProgressBar from '../progressBar/ProgressBar';
import Buttons from '../Buttons/Buttons';
import { setAdvantages, setCheckbox, setRadio } from '../../app/formSlice';
import { ISecondStepForm } from '../../types';


const SecondStepForm = () => {
  const dispatch = useAppDispatch();
  const {advantages, radio, checkbox} = useAppSelector(state => state.formSlice);

  const schema: yup.ObjectSchema<ISecondStepForm> = yup.object({
    advantages: yup.array().required('Please, type at least one advantage').of(yup.string().required('Please, fill an advantage')),
    checkbox: yup.array().required().min(1, 'Please, choose a checkbox'),
    radio: yup.string().required('Please, choose a radio').matches(/[123]/, 'Please, choose a number'),
  });

  const checkboxesID: string[] = ['field-checkbox-group-option-1', 'field-checkbox-group-option-2', 'field-checkbox-group-option-3'];
  const radiosID: string[] = ['field-radio-group-option-1', 'field-radio-group-option-2', 'field-radio-group-option-3'];

  const initialValues: ISecondStepForm = {
    advantages,
    checkbox: checkbox || null,
    radio: `${radio}` || "1",
  }

  return (
    <>
      <ProgressBar step={2}/>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: ISecondStepForm) => {
            const {radio, checkbox, advantages} = values;
            console.log(advantages);
            dispatch(setCheckbox(checkbox));
            dispatch(setAdvantages(advantages));
            dispatch(goForward());
            if (radio) {
              dispatch(setRadio(+radio));
            }
          }
        }
      >
        {({values}) => {
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
                <FieldArray
                  name="advantages"
                >
                  {
                    (arrayHelpers) => {
                      const inputs = values.advantages.map((advantage, i) => {
                        return(
                          <div className="form__item form__item_adv" key={`form__item_adv-${i}`}>
                            <Field 
                              key={`field-advantages-${i + 1}`}
                              name={`advantages.${i}`}
                              id={`field-advantages-${i + 1}`}
                              type="text"
                              placeholder="Placeholder"
                              className="input input_multiple"
                            />
                            <button 
                              type="button"
                              className="form__delete-img"
                              id={`button-remove-${i + 1}`}
                              onClick={() => arrayHelpers.remove(i)}
                            >
                            </button>
                            <ErrorMessage  
                                    name={`advantages.${i}`}
                                    className="input__error input__error_array"
                                    component="p"
                            />
                          </div>
                        ) 
                      })

                      return(
                        <>
                        {inputs}
                        <button 
                          type="button"
                          onClick={() => arrayHelpers.push('')}
                          className="form__plus">
                        </button>
                        </>
                      )
                    }
                  }
                </FieldArray>
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