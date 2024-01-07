import { windowGap } from '../common/constants';

export const returnSizeEditor = (flag: boolean) => {
  const widh = window.innerWidth;
  if (flag) return widh / 3 - windowGap;
  return widh / 2 - windowGap;
};
