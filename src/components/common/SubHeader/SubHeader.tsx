import React, { FC } from "react";
import CN from "classnames";

export interface SubHeaderProps {
  [x: string]: any;
}

export const SubHeader: FC<SubHeaderProps> = ({
  className,
  ...restProps
}: SubHeaderProps) => {
  const SubHeaderClasses = CN("sub-header border", className);

  return (
    <div className={SubHeaderClasses} {...restProps}>
      sub-header is working
    </div>
  );
};

SubHeader.defaultProps = {};

export default SubHeader;
