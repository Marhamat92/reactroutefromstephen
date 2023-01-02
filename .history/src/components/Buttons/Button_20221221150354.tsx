import React from "react";
import className from "classnames";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  rounded?: boolean;
  outline?: boolean;
  rest?: any;
};

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  rounded,
  outline,
  ...rest
}: Props) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-red-500 bg-red-500 text-white": danger,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "rounded-md": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
      "text-yellow-500": outline && warning,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
