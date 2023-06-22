import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IFirstStepForm, gender } from '../../types';
import { setName, setSex, setSurname, setNickname } from '../../app/formSlice';
import { goForward } from '../../app/stepSlice';
import ProgressBar from '../progressBar/ProgressBar';
import Buttons from '../Buttons/Buttons';

import '../../style/form.scss';

const FirstStepForm = () => {
  const dispatch = useAppDispatch();
  const {name, nickname, sex, surname} = useAppSelector(state => state.formSlice);
  const initial: IFirstStepForm = {
    name: name || '',
    surname: surname || '',
    sex: sex || 'man',
    nickname: nickname || '',
  }

  const nicknameRegEx = /^[а-яА-Яa-zA-Z0-9]*$/;
  const nameRegEx = /^[а-яА-Яa-zA-Z]*$/;
  const schema: yup.ObjectSchema<IFirstStepForm> = yup.object({
    nickname: yup
                .string()
                .defined()
                .max(30, 'Nickname shouldn\'t be longer than 30 characters')
                .matches(nicknameRegEx, 'Do not use special characters'),
    name: yup
              .string()
              .defined()
              .matches(nameRegEx, 'Do not use special characters and numbers')
              .max(50, 'Name shouldn\'t be longer than 50 characters'),
    surname: yup
              .string()
              .defined()
              .matches(nameRegEx, 'Do not use special characters')
              .max(50, 'Sername shouldn\'t be longer than 50 characters'),
    sex: yup.mixed<gender>().defined(),
  });

  return (
    <>
      <ProgressBar step={1}/>
      <Formik
        initialValues={initial}
        validationSchema={schema}
        onSubmit={(values: IFirstStepForm) => {
          const {name, nickname, sex, surname} = values;
          dispatch(setName(name));
          dispatch(setNickname(nickname));
          dispatch(setSex(sex));
          dispatch(setSurname(surname));
          dispatch(goForward());
        }}
        >
        <Form className="form form_step" id="first-step">
        <label htmlFor="field-nickname" className="label">Nickname</label>
        <Field 
          type="text" 
          className="input"
          name="nickname"
          placeholder="Placeholder"
          id="field-nickname"
          />
          <p className="input__tip">Tip</p>
          <ErrorMessage
              className="input__error"
              name="nickname"
              component="p" />
        <label htmlFor="field-name" className="label">Name</label>
        <Field 
          type="text" 
          className="input"
          name="name"
          id="field-name"
          placeholder="Placeholder"
          />
          <p className="input__tip">Tip</p>
          <ErrorMessage
              className="input__error"
              name="name"
              component="p" />
        <label htmlFor="field-sername" className="label">Sername</label>
        <Field 
          type="text" 
          className="input"
          name="surname"
          id="field-sername"
          placeholder="Placeholder"
          />
          <p className="input__tip">Tip</p>
          <ErrorMessage
              className="input__error"
              name="surname"
              component="p" />
        <label htmlFor="field-sex" className="label">Sex</label>
        <Field as="select"
          className="input"
          name="sex"
          id="field-sex"
          >
            <option id="field-sex-option-man" value="man">man</option>
            <option id="field-sex-option-woman" value="woman">woman</option>
          </Field>
          <p className="input__tip">Tip</p>
          <Buttons/>
        </Form>
      </Formik>
    </>
  );
};

export default FirstStepForm;