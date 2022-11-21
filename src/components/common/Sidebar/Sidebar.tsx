import React, { FC } from "react";
import CN from "classnames";

export interface SidebarProps {
  [x: string]: any;
}

export const Sidebar: FC<SidebarProps> = ({
  className,
  ...restProps
}: SidebarProps) => {
  const SidebarClasses = CN("sidebar border", className);

  return (
    <div className={SidebarClasses} {...restProps}>
      sidebar is working
    </div>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
