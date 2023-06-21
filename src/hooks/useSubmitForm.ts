import { useSendFormMutation } from '../api/apiSlice';
import {store} from '../app/store';

export const useSubmitForm = () => {
  const [sendForm] = useSendFormMutation();

  const onSubmitForm = () => {
    const {formSlice} = store.getState();
    return sendForm(formSlice);
  }

  return {onSubmitForm}
}