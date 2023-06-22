export interface IStartForm {
  phone: string | null;
  email: string | null;
}

export type gender = "man" | "woman";

export interface IFirstStepForm {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  sex: gender | '';
}

export interface ISecondStepForm {
  advantages: string[];
  radio: string | null;
  checkbox: number[] | null;
}

export interface IThirdStepForm {
  about: string;
}

export interface ISliceState {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
  email: string | null;
  sex: gender | '';
  advantages: string[];
  radio: number | null;
  checkbox: number[] | null;
  about: string | null;
}

export type steps = {
  step: number;
};

export interface IModals {
  isVisible: boolean;
  isSuccessed: boolean;
}
