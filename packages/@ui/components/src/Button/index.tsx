import React from "react";
import { buttonColors } from '@foundation/theme'

type Variant = "default" | "primary" | "danger";
type Size = "s" | 'm' | 'l';

export interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant: Variant;
  size: Size;
}
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  function Button(
    { children, variant = "default", size = "s", disabled = false, ...rest },
    ref
  ) {
    const styles = styleToUtilities(variant, size);

    return (
      <button {...rest} disabled={disabled} ref={ref} className={styles}>
        {children}
      </button>
    );
  }
);

const styleToUtilities = (variant: Variant, size: Size) => {
  const BASESTYLES = "justify-center items-center"
  const variantCSS = variantToUtilities(variant);
  const sizeCSS = sizeToUtilities(size);
  return [BASESTYLES, variantCSS, sizeCSS].join(' ');
}

const variantToUtilities = (variant: Variant) => {
  switch (variant) {
    case "default":
      return "";
    case "primary":
      const primary = buttonColors.primary;
      return `${primary.base} ${primary.hovered}`;
    case "danger":
      const danger = buttonColors.danger;
      return `${danger.base} ${danger.hovered} ${danger.disabled}`;
    default:
      return "";
  }
};
const sizeToUtilities = (size: Size) => {
  switch(size) {
    case 's':
      return "text-sm h-8 p-1";
    case 'm':
      return "text-base h-12 p-2";
    case 'l':
      return "text-lg h-16 p-3";
    default:
      return "";
  }
}
