import React from "react";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant: "default" | "primary";
  size: "s" | "m";
}
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  function Button(
    { children, variant = "default", size = "s", disabled = false, ...rest },
    ref
  ) {
    const css = size === 's' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-red-500'
    return (
      <button
        {...rest}
        disabled={disabled}
        ref={ref}
        className={css}
      >
        {children}
      </button>
    );
  }
);
