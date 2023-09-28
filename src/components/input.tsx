import { ChangeEvent, ReactNode } from "preact/compat";
import { useState } from "preact/hooks";

interface Props {
  Icon?: ReactNode;
  readonly?: boolean;
  defaultValue?: string | number;
  onchange?: (value: number | string) => void;
}

const Input: React.FC<Props> = ({ Icon, readonly, defaultValue, onchange }) => {
  const [focusd, setFocused] = useState<boolean>(false);

  return (
    <div
      className={`${
        focusd && "border-slate-500 shadow"
      } w-full pr-1  border flex py-1 gap-3 h-12 rounded-md `}
    >
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onchange!(e.currentTarget.value)
        }
        defaultValue={defaultValue?.toString()}
        readOnly={readonly}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-10 px-4  bg-transparent outline-none "
        type="number"
      />
      {Icon}
    </div>
  );
};

export default Input;
