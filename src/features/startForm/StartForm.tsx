 import * as React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as yup from 'yup';
 import MaskedInput from "react-text-mask";
 import { useNavigate } from 'react-router-dom';
 import { IStartForm } from '../../types';
 import { useAppDispatch, useAppSelector } from '../../app/hooks';
 import { setEmail, setPhone } from '../../app/formSlice';

 import '../../style/form.scss';

export const StartForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {email, phone} = useAppSelector(state => state.formSlice);

  const phoneNumberMask = [
    "+",
    "7",
    ' ',
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

  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const schema: yup.ObjectSchema<IStartForm> = yup.object({
    phone: yup.string().defined(),
    email: yup.string().defined().matches(emailRegEx, 'Please enter a valid email'),
  });

  const initial: IStartForm = {
    phone: phone || '',
    email: email || '',
  }

  return (
    <>
     <Formik 
      initialValues={initial}
      validationSchema={schema}
      onSubmit={(value: IStartForm) => {
        const {email, phone} = value;
        dispatch(setEmail(email));
        dispatch(setPhone(phone));
        navigate('/front-cloud-camp/create');
      }}
      >
        <Form className="form">
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
                  className="input input_start"
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
            className="input input_start"
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