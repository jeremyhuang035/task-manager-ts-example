import { ChangeEvent, MouseEvent } from 'react';

export interface ITaskFooter {
  onStatusChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => void;
}
