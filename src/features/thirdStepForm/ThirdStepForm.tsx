import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ProgressBar from '../progressBar/ProgressBar';
import { thirdStepForm } from '../../types';
import { setAbout } from '../../app/formSlice';
import { useSubmitForm } from '../../hooks/useSubmitForm';
import Buttons from '../Buttons/Buttons';
import Modals from '../Modals/Modals';

const ThirdStepForm = () => {
  const [symbolCounter, setSymbolCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccessed, setIsSuccessed] = useState(false);
  const dispatch = useAppDispatch();
  const {about} = useAppSelector(state => state.formSlice);
  const {onSubmitForm} = useSubmitForm();

  const initialValues: thirdStepForm = {
    about: about || '',
  }

  const validationSchema: yup.ObjectSchema<thirdStepForm> = yup.object({
    about: yup.string().defined('Please, write about yourself').max(200, 'This is too long'),
  })

  return (
    <>
      <ProgressBar step={3}/>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({about}) => {
          dispatch(setAbout(about));
          onSubmitForm()
            .then((res: any) => {
              setIsVisible(true);
              if (res.data.status === 'success') {
                setIsSuccessed(true);
                console.log(res);
              }
            });
        }}
        >
          {
            ({handleChange}) => {
              const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                const valueWithoutSpaces = e.target.value.split('').filter(char => char !== ' ');
                setSymbolCounter(valueWithoutSpaces.length);
              }

              return(
                <Form className='form'>
                  <label htmlFor="field-about" className="label">About</label>
                  <Field 
                    as="textarea"
                    className="input input_textarea"
                    name="about"
                    id="field-about"
                    placeholder="Placeholder"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onHandleChange(e)}}
                    />
                    <div className="input__info">
                      <p className="input__tip">Tip</p>
                      <p className="input__tip">{symbolCounter}</p>
                    </div>
                    <ErrorMessage
                      name="about"
                      component="p"
                      className="input__error"
                      />
                  <Buttons/>
                </Form>
              )
            }
          }
      </Formik>
      <Modals isVisible={isVisible} isSuccessed={isSuccessed}/>
    </>
  );
};

export default ThirdStepForm;