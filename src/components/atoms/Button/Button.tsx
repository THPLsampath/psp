import React, { FC, ReactNode } from "react";
import CN from "classnames";

export interface ButtonProps {
  [x: string]: any;
  children?: string | ReactNode;
  apparence?: "default" | "success" | "danger";
  view?: "default" | "ghoust" | "gray";
  iconBefore?: string | ReactNode;
  iconAfter?: string | ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  apparence,
  iconBefore,
  iconAfter,
  ...restProps
}: ButtonProps) => {
  const ButtonClasses = CN(
    "button px-[8px] py-[4px] font-medium rounded-sm gap-x-1 flex",
    {
      "bg-green-600": apparence === "success",
      "bg-blue-600": apparence === "default",
      "bg-red-600": apparence === "danger",
    },
    className
  );

  return (
    <button className={ButtonClasses} {...restProps}>
      {iconBefore && <div className="inline-flex">{iconBefore}</div>}
      {children}
      {iconAfter && <div className="inline-flex">{iconAfter}</div>}
    </button>
  );
};

Button.defaultProps = {
  children: "button",
  apparence: "default",
  iconBefore: undefined,
  iconAfter: undefined,
};

export default Button;
