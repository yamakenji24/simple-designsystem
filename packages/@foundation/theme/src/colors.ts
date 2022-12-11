/**
 * ベースカラー
 */
export const baseColors = {
  primary: "#0ea5e9", // sky-500
  danger: "#ef4444", // red-500
} as const;

export type BaseColors = typeof baseColors;

/**
 * ボタン用に利用するカラー
 */
export const buttonColors = {
  primary: {
    base: "bg-sky-500",
    active: "bg-sky-400",
    disabled: "bg-gray-500",
    hovered: "bg-sky-300",
  },
  danger: {
    base: "bg-red-500",
    active: "bg-red-400",
    disabled: "bg-gray-500",
    hovered: "bg-red-300",
  },
} as const;
export type ButtonColors = typeof buttonColors;