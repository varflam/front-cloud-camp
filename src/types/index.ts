export interface startForm {
  phone: string | null;
  email: string | null;
}

export enum gender {
  'man' = 'man',
  'woman' = 'woman',
}

export interface firstStepForm {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  sex: gender | null;
}

export interface sliceState {
  nickname: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
  email: string | null;
  sex: gender | null;
  advantages: string[] | null;
  radio: number | null;
  checkbox: number[] | null;
  about: string | null;
}

export type steps = {
  step: "1" | "2" | "3";
};