 import * as React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as yup from 'yup';
 import { startForm } from '../../types';
 import { useAppDispatch } from '../../app/hooks';
 import { setEmail, setPhone } from '../../app/formSlice';

 import './startForm.scss';

export const StartForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const schema: yup.ObjectSchema<startForm> = yup.object({
    phone: yup.string().defined().matches(phoneRegExp),
    email: yup.string().defined().email(),
  })

  const initial: startForm = {
    phone: '',
    email: '',
  }

  return (
    <>
     <Formik 
      initialValues={initial}
      validationSchema={schema}
      onSubmit={(value: startForm) => {
        const {email, phone} = value;
        dispatch(setEmail(email));
        dispatch(setPhone(phone));
      }}
      >
        <Form className="start-form">
          <label htmlFor="phone" className="label">Номер телефона</label>
          <Field
            type="text"
            className="input"
            id="phone"
            name="phone"
            placeholder="+7 999 999-99-99"
            />
          <label htmlFor="email" className="label">Email</label>
          <Field
            type="text"
            className="input"
            id="email"
            name="email"
            placeholder="tim.jennings@example.com"
            />
          <button 
          className="button"
          type="submit"
          id="button-start"
          >
            Начать
          </button>
        </Form>
     </Formik>
    </>
  );
};