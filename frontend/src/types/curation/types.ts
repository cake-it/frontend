import { Dispatch, SetStateAction } from 'react';

export interface CardProps {
  image: number;
  tag: string;
  headText: string;
  subText: string;
  bottom: number;
  setBlogPressed: Dispatch<SetStateAction<boolean>>;
}
