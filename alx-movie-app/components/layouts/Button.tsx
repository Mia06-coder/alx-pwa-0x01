import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: IconDefinition;
};

const Button: React.FC<ButtonProps> = ({ label, icon, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center mt-5 gap-2 py-2 px-4 rounded-sm border-none bg-gray-900 text-white font-medium cursor-pointer`}
    style={{
      ...props.style,
    }}
  >
    {icon && <FontAwesomeIcon icon={icon} />}
    {label}
  </button>
);

export default Button;
