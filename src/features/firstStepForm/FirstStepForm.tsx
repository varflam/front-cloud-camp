import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAppDispatch } from '../../app/hooks';
import { firstStepForm } from '../../types';
import { setName, setSex, setSurname, setNickname } from '../../app/formSlice';
import ProgressBar from '../progressBar/ProgressBar';

import '../../style/form.scss';

const FirstStepForm = () => {
  const dispatch = useAppDispatch();

  const initial: firstStepForm = {
    name: '',
    surname: '',
    sex: null,
    nickname: '',
  }
  return (
    <div className="container">
      <ProgressBar step="1"/>
      <Formik
        initialValues={initial}
        onSubmit={(values: firstStepForm) => {
          const {name, nickname, sex, surname} = values;
          dispatch(setName(name));
          dispatch(setNickname(nickname));
          dispatch(setSex(sex));
          dispatch(setSurname(surname));
        }}
        >
        <Form className="form form_step">
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
              name="email"
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
              name="email"
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
              name="email"
              component="p" />
        <label htmlFor="field-sex" className="label">Sex</label>
        <Field as="select"
          className="input"
          placeholder="Placeholder"
          name="sex"
          id="field-sex"
          value="man"
          >
            <option value="man">man</option>
            <option value="woman">woman</option>
          </Field>
          <p className="input__tip">Tip</p>
        </Form>
      </Formik>
    </div>
  );
};

export default FirstStepForm;