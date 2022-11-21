import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface AuthRequiredProps {
  [x: string]: any;
}

export const AuthRequired: FC<AuthRequiredProps> = ({
  children,
}: AuthRequiredProps) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("redirectTo", JSON.stringify(location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!token) {
      // Redirect user to login page if Token doesn't exist
      navigate("/auth/login");
    }
  });

  return children;
};

export default AuthRequired;
