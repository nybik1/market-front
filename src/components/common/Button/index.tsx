import React, { ButtonHTMLAttributes } from "react";
import cs from "classnames";
import styles from "./index.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  const buttonClassName = cs(styles.button, className);
  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
