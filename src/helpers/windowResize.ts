import { WINDOW_GAP } from '../common/constants';

export const returnSizeEditor = (flag: boolean) => {
  const widh = window.innerWidth;
  if (flag) return widh / 3 - WINDOW_GAP * 2;
  if (widh <= 600) return widh - WINDOW_GAP * 3;
  return widh / 2 - WINDOW_GAP * 3;
};
