import React, { FC } from "react";
import CN from "classnames";
import { Login } from "../../pages/Login";

export interface AuthLayoutProps {
  [x: string]: any;
}

export const AuthLayout: FC<AuthLayoutProps> = ({
  className,
  ...restProps
}: AuthLayoutProps) => {
  const AuthLayoutClasses = CN("auth-layout", className);

  return (
    <div className={AuthLayoutClasses} {...restProps}>
      <Login />
    </div>
  );
};

AuthLayout.defaultProps = {};

export default AuthLayout;
