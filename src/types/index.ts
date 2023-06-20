export interface startForm {
  phone: string | null;
  email: string | null;
}

export type gender = "man" | "woman";

export interface firstStepForm {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  sex: gender | '';
}

export interface secondStepForm {
  advantages: string[] | null;
  radio: number | null;
  checkbox: number[] | null;
}

export interface sliceState {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
  email: string | null;
  sex: gender | '';
  advantages: string[] | null;
  radio: number | null;
  checkbox: number[] | null;
  about: string | null;
}

export type steps = {
  step: number;
};