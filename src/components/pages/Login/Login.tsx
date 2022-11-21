import React, { FC } from "react";
import CN from "classnames";
import { Button } from "../../atoms/Button";

export interface LoginProps {
  [x: string]: any;
}

export const Login: FC<LoginProps> = ({
  className,
  ...restProps
}: LoginProps) => {
  const LoginClasses = CN("login flex gap-2", className);

  return (
    <div className={LoginClasses} {...restProps}>
      login is working
      <Button
        iconBefore={<i className="ri-ball-pen-line" />}
        iconAfter={<i className="ri-ball-pen-line" />}
      >
        Test
      </Button>
      <Button iconAfter={<i className="ri-ball-pen-line" />}>Test 2</Button>
    </div>
  );
};

Login.defaultProps = {};

export default Login;
