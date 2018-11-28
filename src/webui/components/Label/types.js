/**
 * @prettier
 * @flow
 */

import { Styles } from 'polished';

export interface IProps {
  text: string;
  capitalize?: boolean;
  weight?: string;
  modifiers?: Styles;
}
