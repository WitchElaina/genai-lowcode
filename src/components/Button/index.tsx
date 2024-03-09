import { useEffect, useState } from 'react';
import './style.css';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'default';
}

export const Button = (props: ButtonProps): JSX.Element => {
  const type = props.type || 'default';

  return (
    <button className={`genai-button ${type}`} onClick={props.onClick}>
      {props.label}
    </button>
  );
};
