/// <reference types="react" />
/// <reference types="react" />
interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    variant: "default" | "primary";
    size: "s" | "m";
}
declare const Button: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
