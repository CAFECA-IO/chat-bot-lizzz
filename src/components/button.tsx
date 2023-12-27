// components/Button.tsx

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({onClick, children}) => {
  return (
    <button className="text-amber-500" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
