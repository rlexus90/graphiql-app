import * as yup from 'yup';
import { ILang, Language } from '../../types/localisation';

export const setupSignUpSchema = (lang: Language) => {
  return yup.object({
    email: yup
      .string()
      .email(text[lang].invalidEmail)
      .required(text[lang].requireEmail),
    password1: yup
      .string()
      .required(text[lang].passwordReq)
      .matches(/[A-ZА-Я]/, text[lang].pass_Uppercase)
      .matches(/[a-zа-я]/, text[lang].pass_Lowercase)
      .matches(/\d/, text[lang].pass_Digit)
      .matches(/[!@#$%^&*]/, text[lang].pass_Special)
      .min(8, text[lang].pass_Length),
    password2: yup
      .string()
      .oneOf([yup.ref('password1')], text[lang].pass_Match)
      .required(text[lang].passwordReq),
  });
};

export const setupLoginSchema = (lang: Language) => {
  return yup.object({
    email: yup
      .string()
      .email(text[lang].invalidEmail)
      .required(text[lang].requireEmail),
    password: yup.string().required(text[lang].passwordReq),
  });
};

const text: ILang = {
  Ua: {
    requireEmail: 'Введіть пошту',
    passwordReq: 'Введіть пароль',
    invalidEmail: 'Пошта не валідна',
    pass_Uppercase: 'Пароль має містити хоча б 1 велику літеру',
    pass_Lowercase: 'Пароль має містити хоча б 1 малу літеру',
    pass_Digit: 'Пароль має містити хоча б 1 цифру',
    pass_Special: 'Пароль має містити хоча б 1 спеціальний сімвол (!@#$%^&*)',
    pass_Length: 'Пароль має бути довшим',
    pass_Match: 'Паролі мають співпадати',
  },
  En: {
    requireEmail: 'Input email',
    passwordReq: 'Input password',
    invalidEmail: 'Not valid email',
    pass_Uppercase: 'Password must have 1 uppercase letter',
    pass_Lowercase: 'Password must have 1 lowercase letter',
    pass_Digit: 'Password must have 1 digit',
    pass_Special: 'Password must have 1 special character (!@#$%^&*)',
    pass_Length: 'Password must be longer',
    pass_Match: 'Passwords must match',
  },
};
