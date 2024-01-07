import { TAB } from '../common/constants';

export const prettieStr = (sting: string) => {
  const val = JSON.stringify(sting)
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\(/g, ' ( ')
    .replace(/\)/g, ' ) ')
    .replace(/"/g, '');
  const arr = val.split(' ').filter((el) => el);
  let n = 0;
  let openBraces = 0;
  let str = ``;
  arr.map((el) => {
    if (el === '{') {
      str += el;
      n += 1;
      return;
    }

    if (el === '}') {
      n -= 1;
      str += '\\n' + TAB.repeat(n) + el;
      return;
    }

    if (el === '(') {
      openBraces += 1;
      str += el;
      return;
    }
    if (el === ')') {
      str = str.slice(0, -1);
      openBraces -= 1;
      str += el + ' ';
      return;
    }

    if (openBraces !== 0) {
      str += el + ' ';
      return;
    }

    if (n === 0) {
      str += ' ' + el;
      return;
    }
    str += '\\n' + TAB.repeat(n) + el;
  });
  str = str.slice(1);
  str = '"' + str;
  str += '"';
  return eval(str);
};
