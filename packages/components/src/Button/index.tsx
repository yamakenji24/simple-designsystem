import { forwardRef } from "react";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant: "default" | "primary";
  size: "s" | "m";
}
export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, variant = "Default", size = "s", disabled = false, ...rest },
  ref
) {
  return (
    <button {...rest} disabled={disabled} ref={ref}>
      {children}
    </button>
  );
});
