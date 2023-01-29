import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Item } from '..';

export interface Social extends Item {
  icon: IconName;
  url: string;
}
