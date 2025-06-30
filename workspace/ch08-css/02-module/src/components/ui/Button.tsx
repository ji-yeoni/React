import type { ButtonHTMLAttributes, ReactHTMLElement } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  bg?: string;
  color?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps){
  return (
    <button className={`${styles.button} ${styles[`bg-${bg}-text-${color}`]}`} { ...rest }>{ children }</button>
  );
}

export default Button;