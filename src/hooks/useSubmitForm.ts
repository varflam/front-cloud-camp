import { useSendFormMutation } from '../api/apiSlice';
import {store} from '../app/store';

export const useSubmitForm = () => {
  const [sendForm] = useSendFormMutation();

  const onSubmitForm = () => {
    const {formSlice} = store.getState();
    sendForm(formSlice)
      .then(res => console.log(res));
  }

  return {onSubmitForm}
}