import { TAB } from '../common/constants';

export const prettieStr = (sting: string) => {
  const val = JSON.stringify(sting)
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/"/g, '');
  const arr = val.split(' ').filter((el) => el);
  let n = 0;
  let str = `"`;
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

    if (n === 0) {
      str += el + ' ';
      return;
    }
    str += '\\n' + TAB.repeat(n) + el + ' ';
  });
  str += '"';
  return eval(str);
};
