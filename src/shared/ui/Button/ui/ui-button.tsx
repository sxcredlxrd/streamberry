import type { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type UIButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function UIButton({
  onClick,
  children,
  className,
  ...buttonProps
}: UIButtonProps) {
  return (
    <button
      className={classNames(
        "text-n-1 px-[30px] py-[15px] rounded-[10px] bg-color-3 border-1 border-color-3 cursor-pointer hover:bg-color-4 hover:border-color-4 transition ease-in-out duration-200",
        className,
      )}
      {...buttonProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default UIButton;
