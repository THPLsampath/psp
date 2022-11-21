import { AuthLayout } from "../components/layout";
import { MainLayout } from "../components/layout/MainLayout";
import { Login } from "../components/pages/Login";

interface Route {
  [x: string]: any;
  path: string;
  component?: any;
  layout?: any;
  redirectTo?: string;
  isSecured?: boolean;
  isAuthScreen?: boolean;
  hasSidebar?: boolean;
  hasSubHeading?: boolean;
}

export const routes: Route[] = [
  { path: "/auth", redirectTo: "/auth/login" },
  {
    path: "/auth/login",
    component: Login,
    layout: AuthLayout,
    isAuthScreen: true,
  },
  {
    path: "/",
    component: Login,
    layout: MainLayout,
    heading: "Users",
    hasSubHeading: false,
  },
];
