/**
 * @prettier
 * @flow
 */
import { Styles } from 'polished';

import { Icons } from './index';

export interface IIconsMap {
  brazil: string;
  spain: string;
  china: string;
  nicaragua: string;
  pakistan: string;
  austria: string;
  india: string;
  earth: string;
  verdaccio: string;
  license: string;
  time: string;
  [key: string]: string;
}

export interface IProps {
  name: $Keys<typeof Icons>;
  className?: string;
  // $FlowFixMe
  onClick?: (event: SyntheticMouseEvent<SVGElement | HTMLSpanElement>) => void;
  size?: 'sm' | 'md';
  pointer?: boolean;
  img?: boolean;
  modifiers?: Styles;
}
