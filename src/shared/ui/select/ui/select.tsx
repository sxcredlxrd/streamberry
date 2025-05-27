import { useRef, useState } from "react";
import { useClickOutside } from "react-haiku";
import classNames from "classnames";

type Option = {
  value: string;
  label: string;
};

export type UISelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  selectedIndicatorClassName?: string;
};

function UISelect({
  label,
  options,
  value,
  onChange,
  className,
  dropdownClassName,
  optionClassName,
  selectedIndicatorClassName,
}: UISelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div
      className={classNames(
        "relative flex flex-col gap-[10px] w-[200px] h-[50px]",
        className,
      )}
      ref={ref}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-full bg-n-4 border-1 border-n-5 text-white rounded-lg px-[30px] py-[15px] flex justify-between items-center"
      >
        <div className="flex flex-col items-start">
          <span className="text-[16px]">{label}</span>
          <span className={classNames(open ? "hidden" : "text-[12px]")}>
            {selectedLabel}
          </span>
        </div>
        <svg
          className={classNames("w-4 h-4 transform transition-transform", {
            "rotate-180": open,
          })}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className={classNames(
            "absolute top-full left-0 right-0 mt-2 bg-black text-white rounded-xl shadow-lg p-2 z-10",
            dropdownClassName,
          )}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={classNames(
                "w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-neutral-800",
                optionClassName,
              )}
            >
              <span
                className={classNames(
                  "w-4 h-4 mr-3 rounded-full border",
                  {
                    "border-n-1 bg-color-3": value === opt.value,
                    "border-gray-500": value !== opt.value,
                  },
                  selectedIndicatorClassName,
                )}
              />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default UISelect;
