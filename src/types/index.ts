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
  radio: number | null;
  checkbox: number[] | null;
}

export interface thirdStepForm {
  about: string;
}

export interface sliceState {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
  email: string | null;
  sex: gender | '';
  advantages: string[];
  radio: number | null;
  checkbox: number[];
  about: string | null;
}

export type steps = {
  step: number;
};