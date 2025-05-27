import { NavLink } from "react-router";
import classNames from "classnames";
import type { ComponentType } from "react";

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

export type IconLinkProps = {
  to: string;
  IconComponent: ComponentType<IconProps>;
};

function IconLink({ to, IconComponent }: IconLinkProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <IconComponent
          className={classNames({
            "text-n-1": isActive,
            "text-n-2": !isActive,
            "hover:text-n-1": !isActive,
            "transition duration-300": true,
          })}
          size={30}
        />
      )}
    </NavLink>
  );
}

export default IconLink;
