import type { ChangeEvent, InputHTMLAttributes, Ref } from "react";
import classNames from "classnames";

export type UIInputProps = {
  ref?: Ref<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function UIInput({
  ref,
  placeholder,
  className,
  value,
  onChange,
  ...inputProps
}: UIInputProps) {
  return (
    <input
      className={classNames(
        "px-[15px] py-[10px] border-1 border-n-1 rounded-[5px]",
        className,
      )}
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...inputProps}
    />
  );
}

export default UIInput;
