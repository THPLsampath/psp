import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthRequired } from "./components/auth/AuthRequired";
import { routes } from "./routes/routes";
import "./styles/index.scss";

const App: React.FC = () => {
  /* Render component with or without Layout */
  const renderWithLayout = ({
    Component,
    Layout,
    hasPermissions,
    ...restProps
  }: any) => {
    if (hasPermissions === false) {
      return (
        <div className="flex items-center justify-center w-full h-screen font-bold text-center uppercase text-h4 text-N-700">
          No permissions.
        </div>
      );
    }

    if (Layout) {
      return (
        <Layout {...restProps}>
          <Component />
        </Layout>
      );
    }
    return <Component {...restProps} />;
  };

  /* Rendering routes */
  const renderComponent = ({ isSecured, ...restProps }: any) => {
    if (isSecured) {
      return <AuthRequired>{renderWithLayout({ ...restProps })}</AuthRequired>;
    } else {
      return renderWithLayout({ ...restProps });
    }
  };

  /* Iterate through Routes */
  const routeRender = (
    <Routes>
      {routes.map(
        (
          {
            redirectTo,
            path,
            layout: Layout,
            component: Component,
            isSecured,
            hasSidebar = true,
            heading,
            hasSubHeading = true,
            hasSubFooter = false,
          }: any,
          key
        ) => {
          /* If redirectTo is defined, render a Redirect component */
          if (redirectTo) {
            return (
              <Route
                key={key}
                path={path}
                element={<Navigate to={redirectTo} />}
              />
            );
          }

          /* Render Route component */
          return (
            <Route
              path={path}
              key={key}
              element={renderComponent({
                Component,
                Layout,
                isSecured,
                hasSidebar,
                heading,
                hasSubHeading,
                hasSubFooter,
              })}
            />
          );
        }
      )}
    </Routes>
  );

  return <Router>{routeRender}</Router>;
};

export default App;
