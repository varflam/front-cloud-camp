 import * as React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as yup from 'yup';
 import MaskedInput from "react-text-mask";
 import { startForm } from '../../types';
 import { useAppDispatch } from '../../app/hooks';
 import { setEmail, setPhone } from '../../app/formSlice';

 import './startForm.scss';

export const StartForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const phoneNumberMask = [
    "7",
    "(",
    /\d/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  const schema: yup.ObjectSchema<startForm> = yup.object({
    phone: yup.string().defined(),
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
              name="phone"
              render={({ field }: any) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  id="phone"
                  placeholder="Enter your phone number"
                  type="text"
                  className="input"
                />
              )}
            />
            <ErrorMessage
              className="input__error"
              name="phone"
              component="p" />
          <label htmlFor="email" className="label">Email</label>
          <Field
            type="text"
            className="input"
            id="email"
            name="email"
            placeholder="tim.jennings@example.com"
            />
            <ErrorMessage
              className="input__error"
              name="email"
              component="p" />
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