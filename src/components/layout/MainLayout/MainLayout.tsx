import React, { FC } from "react";
import CN from "classnames";
import { Header } from "../../common/Header";
import { SubHeader } from "../../common/SubHeader";
import { Sidebar } from "../../common/Sidebar";

export interface MainLayoutProps {
  [x: string]: any;
}

export const MainLayout: FC<MainLayoutProps> = ({
  className,
  hasSidebar,
  heading,
  children,
  hasSubHeading,
  hasSubFooter,
  ...restProps
}: MainLayoutProps) => {
  const MainLayoutClasses = CN("main-layout", className);

  const renderLayoutInner = () => {
    return (
      <div
        className={CN("pt-[16px] flex flex-col", {
          "px-[32px] h-full left-0 right-0 bottom-0 top-[64px] overflow-hidden":
            hasSidebar,
          "pb-[124px]": hasSubFooter,
          "pb-[32px]": !hasSubFooter,
        })}
      >
        <div className="relative flex flex-col w-full h-full main-layout__content gap-[12px]">
          {heading && (
            <div
              className={CN("flex w-full h-[24px] items-center", {
                "absolute top-0": hasSidebar,
              })}
            >
              <h4 className="font-semibold text-h5 text-N-800">{heading}</h4>
            </div>
          )}

          <div
            className={CN("main-layout__inner flex flex-col", {
              "absolute left-0 right-0 bottom-0": hasSidebar,
              "top-[36px]": heading,
              "top-[0]": !heading,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  const renderLayout = () => {
    // Render with sidebar
    if (hasSidebar) {
      return (
        <>
          <Sidebar className="top-[64px] left-0 bottom-0" />
          <div className="flex flex-col grow relative">
            <Header className="h-[64px]" />
            {hasSubHeading && <SubHeader />}
            {renderLayoutInner()}
          </div>
        </>
      );
    }

    // Render without sidebar
    return (
      <div className="container">
        <Header className="fixed left-0 right-0 top-0 h-[64px]" />
        {hasSubHeading && <SubHeader />}
        {renderLayoutInner()}
      </div>
    );
  };

  return (
    <>
      <div
        className={CN(
          "main-layout__container overflow-auto fixed top-0 left-0 right-0 bottom-0 flex"
        )}
      >
        {renderLayout()}
        {/* Dialog Box for Changing Current Employee */}
      </div>
    </>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
