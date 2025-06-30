import type { ButtonHTMLAttributes, ReactHTMLElement } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  bg?: string;
  color?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps){
  return (
    <button className={`button bg-${bg}-text-${color}`} { ...rest }>{ children }</button>
  );
}

export default Button;