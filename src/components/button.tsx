// components/Button.tsx

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  cx?: string; // other classNames
}

const Button: React.FC<ButtonProps> = ({ onClick, children, cx }) => {
  return (
    <button className={cx} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
