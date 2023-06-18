export interface startForm {
  phone: string | null;
  email: string | null;
}

enum gender {
  'man' = 'man',
  'woman' = 'woman',
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